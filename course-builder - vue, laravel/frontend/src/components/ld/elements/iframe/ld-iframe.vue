<template>
<div>
    <p v-if="m_desc" class="ld-desc" v-html="m_desc"></p>

    <div class="ld-embed-responsive ld-embed-responsive-16by9">
	<transition :name="m_ld_element_edit_transition">
		<div class="ld-element-edit" v-if="m_element.is_editing">
            <div>
                <textarea rows="2" v-model="m_element.url">
                </textarea>
                <textarea rows="2" v-model="m_desc" placeholder="Описание (необязательно)">
                </textarea>
            </div>
		</div>
	</transition>
        <iframe class="ld-embed-responsive-item ld-media-element ld-lazy-load"
            ref="lazy_element" 
            frameborder="no" 
            allowtransparency="true" 
            allowfullscreen="true"
            src=""
            :data-lazy-src="src"
            @load="m_hasLoaded"></iframe>

        <div class="ld-embed-responsive-spacer"></div>
    </div>

</div>
</template>
<script>
import { mixin_ld_element } from '@/mixins/ld-element';
import { mixin_ld_lazy } from '@/mixins/ld-lazy';

export default {
    computed: {
        is_code() {
            if(this.m_element.subtype == "code") {
                return true
            } else {
                return false
            }
        },
        src() {
            let src
            /*
                #REFACTOR
                Хорошо бы сделать возможность
                добавления универсального iframe,
                а не пилить каждый отдельным компонентом
            */

            if(this.m_element.subtype == "code") {
                
                if(this.m_element.url != null) { 
                    src = this.m_element.url + "&editable=true";
                }
            } else if(this.m_element.subtype == "youtube") {
                if(this.m_element.url != null) {
                    let rawurl = this.m_element.url
                    //eslint-disable-next-line
                    let rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
                    let id = rawurl.match(rx)[1]
                    src = 'https://www.youtube.com/embed/'+id
                }
            } else if (this.m_element.subtype == "figma") {
                if(this.m_element.url != null) {
                    src = "https://www.figma.com/embed?embed_host=share&url=" + this.m_element.url
                }
            } else if (this.m_element.subtype == "miro") {
                if(this.m_element.url != null) {
                    src = this.m_element.url.replace('board', 'embed')
                }
            } else if (this.m_element.subtype == "sketchfab") {
                if(this.m_element.url != null) {
                    src = this.m_element.url
                }
            }
            return src;
        }
    },
    mixins: [
        mixin_ld_element, 
        mixin_ld_lazy
	],
	name: "ld-iframe",
}
</script>
<style lang="scss">
.ld-embed-responsive {
    position: relative;

    .ld-embed-responsive-item {
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
    }
}

.ld-embed-responsive-16by9 {
    .ld-embed-responsive-spacer {
        padding-top: 56.25%;
    }
}
</style>