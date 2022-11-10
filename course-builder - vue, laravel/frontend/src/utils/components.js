//containers
import LdContainer from '@/components/ld/containers/ld-container'

// text
import LdParagraph from '@/components/ld/elements/text/ld-paragraph'
import LdHeader from '@/components/ld/elements/text/ld-header'

//intro
import LdIntro from '@/components/ld/elements/ld-intro'

// media
import LdImage from '@/components/ld/elements/media/ld-image'
import LdVideo from '@/components/ld/elements/media/ld-video'

// iframe
import LdIframe from '@/components/ld/elements/iframe/ld-iframe'

// highlight
import LdHighlights from '@/components/ld/elements/highlight/ld-highlights'

// dropzone
import dropzone from '@/components/utils/dropzone'

// service
import LdAddElement from '@/components/ld/service/ld-add-element'
import modal from '@/components/utils/modal'

export default (Vue) => {
    //containers
    Vue.component('ld-container', LdContainer);

    // intro
    Vue.component('ld-intro', LdIntro);

    // text
    Vue.component('ld-paragraph', LdParagraph);
    Vue.component('ld-header', LdHeader);

    // media
    Vue.component('ld-image', LdImage);
    Vue.component('ld-video', LdVideo);

    // dropzone
    Vue.component('dropzone', dropzone);

    // iframe
    Vue.component('ld-iframe', LdIframe);

    // highlight
    Vue.component('ld-highlights', LdHighlights);

    // service
    Vue.component('ld-add-element', LdAddElement);
    Vue.component('modal', modal)

}