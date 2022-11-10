import ExcelJS from 'exceljs'
import course_state from "@/store/course"
import translate from './translate'

function courseMapCells(childs, y, x, maxColumns) {
    let cells = []
    if (x > maxColumns)
        maxColumns = x
    for(let i = 0; i < childs.length; i++) {
        let value
        if(course_state.topics.items[childs[i]].show_skill) {
            value = 'Can ' + course_state.topics.items[childs[i]].value
        } else {
            value = 'Knows ' + course_state.topics.items[childs[i]].value
        }
        cells.push({ 
            value: value,
            height: course_state.topics.items[childs[i]].getLowestChilds().length,
            x: x,
            y: y
        })
        let [ newCells, newMaxColumns ] = courseMapCells(course_state.topics.items[childs[i]].childs, y, x+1, maxColumns)

        cells.push(...newCells)

        maxColumns = newMaxColumns

        if(course_state.topics.items[childs[i]].getLowestChilds().length == 0) {
            y+= 1
        } else {
            y+= course_state.topics.items[childs[i]].getLowestChilds().length
        }
    }
    return [cells, maxColumns ]
}

function createCourseMap(course_map) {
    const [ cells, maxColumns ] = courseMapCells(course_state.topics.items['supernode-topics'].childs, 1, 1, 0)

    let columns = []
    for(let i = 0; i < maxColumns; i++) {
        columns.push({ width: 30 })
    }
    course_map.columns = columns
    
    let lowestCell = 1

    cells.forEach(node => {
        if(node.y > lowestCell)
            lowestCell = node.y

        course_map.getCell(node.y, node.x).value = node.value

        course_map.getCell(node.y, node.x).border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
        }

        course_map.getCell(node.y, node.x).font = {
            name: 'Arial',
            size: 14,
        }

        course_map.getCell(node.y, node.x).alignment = { vertical: 'middle', horizontal: 'left' }

        if(node.height > 1) {
            course_map.mergeCells(node.y, node.x, node.y + node.height - 1, node.x)
        }
    })

    const rows = course_map.getRows(1, lowestCell)
    rows.forEach(row => {
        row.height = 40
    })
}

let lessonNumber
let rowCounter
let mergeModule
/*
-стили
*/
function fillLessonsMap(childs, writeModules, lessons_map) {
    let rows = []
    for(let i = 0; i < childs.length; i++) {
        switch(course_state.lessons.items[childs[i]].type) {
            case 'module': {
                rowCounter+=2
                
                if(writeModules) {
                    let name
                    if (course_state.lessons.items[childs[i]].name == undefined) {
                        name = translate('no_name')
                    } else {
                        name = course_state.lessons.items[childs[i]].name
                    }
                    
                    rows.push({ name: '' })
                    rows.push({ name: 'Module: ' + name })
                    mergeModule.push(rowCounter)
                }   

                rows.push(...fillLessonsMap(course_state.lessons.items[childs[i]].childs, writeModules, lessons_map))
                break;
            }
            
            case 'sprint': {
                rowCounter+=1
                let name
                if (course_state.lessons.items[childs[i]].name == undefined) {
                    name = translate('no_name')
                } else {
                    name = course_state.lessons.items[childs[i]].name
                }
                rows.push({ name: 'Series: ' + name })

                rows.push(...fillLessonsMap(course_state.lessons.items[childs[i]].childs, writeModules, lessons_map))
                break;
            }
            
            case 'lesson': {
                rowCounter+=1
                lessonNumber += 1
                let skills = fillLessonsMap(course_state.lessons.items[childs[i]].childs, writeModules, lessons_map)
                let usedSkills = ""
                skills.forEach(skill => {
                    usedSkills = usedSkills + skill + "\n"
                })
                let state
                if (course_state.lessons.items[childs[i]].state_id == undefined) {
                    state = translate('state_not_defined')
                } else {
                    state = course_state.states.items[course_state.lessons.items[childs[i]].state_id].name
                }

                let name
                if (course_state.lessons.items[childs[i]].name == undefined) {
                    name = translate('no_name')
                } else {
                    name = course_state.lessons.items[childs[i]].name
                }

                
                rows.push({ 
                    name: name,
                    state: state,
                    number: lessonNumber,
                    skills: usedSkills
                })
                break;
            }
            case 'skill': {
                let skill = course_state.topics.items[course_state.lessons.items[childs[i]].topic_id].value
                rows.push(skill)
                break;
            }
        }
        /*
        let value
        if(course_state.topics.items[childs[i]].show_skill) {
            value = 'Can ' + course_state.topics.items[childs[i]].value
        } else {
            value = 'Knows ' + course_state.topics.items[childs[i]].value
        }
        cells.push({ 
            value: value,
            height: course_state.topics.items[childs[i]].getLowestChilds().length,
            x: x,
            y: y
        })
        */
    }
    return rows
}

function createLessonsMap(lessons_map) {
    lessons_map.properties.defaultRowHeight = 60
    lessons_map.columns = [
        { header: translate('number'), key: 'number', width: 10, style: { alignment: { vertical: 'top' } }  },
        { header: translate('lesson_name'), key: 'name', width: 32, style: { alignment: { vertical: 'top' } }  },
        { header: translate('student_state'), key: 'state', width: 32, style: { alignment: { vertical: 'top' } } },
        { header: translate('used_skills'), key: 'skills', width: 32, style: { alignment: { wrapText: true, vertical: 'top' } } },
    ]
    let writeModules = course_state.lessons.items['supernode-lessons'].childs.length
    if(writeModules > 1) {
        writeModules = true
    } else {
        writeModules = false
    }
    lessonNumber = 0
    rowCounter = 1
    mergeModule = []
    const rows = fillLessonsMap(course_state.lessons.items['supernode-lessons'].childs, writeModules, lessons_map)
    lessons_map.addRows(rows)
    mergeModule.forEach(row => {
        lessons_map.getCell(row, 2).font = {
            name: 'Arial',
            size: 18,
        }
        lessons_map.mergeCells(row, 2, row, 3)
    })
    
}

export default function() {
    const workbook = new ExcelJS.Workbook()

    workbook.creator = 'methoductor'
    workbook.lastModifiedBy = 'methoductor'
    workbook.created = new Date()
    workbook.modified = new Date()
    workbook.lastPrinted = new Date()

    const course_map = workbook.addWorksheet('Course Map')

    const lessons_map = workbook.addWorksheet('Lessons Map')

    createCourseMap(course_map)
    createLessonsMap(lessons_map)

    workbook.xlsx.writeBuffer({
        base64: true
    })
    .then( function (xls64) {
        // build anchor tag and attach file (works in chrome)
        var a = document.createElement("a")
        var data = new Blob([xls64], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })

        var url = URL.createObjectURL(data)
        a.href = url
        a.download = "export.xlsx"
        document.body.appendChild(a)
        a.click()
        setTimeout(function() {
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
        },0)
    })
    .catch(function(error) {
        console.log(error.message);
    })

}