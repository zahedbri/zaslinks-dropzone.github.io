import Installation from './pages/Installation.vue';
import Props from './pages/Props.vue';
import demo from './pages/demo.vue';
import manual from './pages/ManuallyAddDemo.vue';
import icon from './pages/AddingIconDemo.vue';
import additionalParams from './pages/SendAdditionalParamsDemo.vue';
import events from './pages/Events.vue'
import methods from './pages/Methods.vue'
import s3upload from './pages/UploadToAWSS3.vue'
import customPreview from './pages/customPreviewDemo.vue'
import customHtml from './pages/CustomHtml.vue'

export default [
  { path: '/installation', component: Installation },
  { path: '/props', component: Props},
  { path: '/events', component: events },
  { path: '/methods', component: methods },
  { path: '/custom-preview', component: customPreview },
  { path: '/custom-html', component: customHtml },
  { path: '/demo', component: demo },
  { path: '/iconDemo', component: icon },
  { path: '/manual', component: manual },
  { path: '/additionalParams', component: additionalParams },
  { path: '/aws-s3-upload', component: s3upload },
  { path: '*', redirect: '/installation' }
]