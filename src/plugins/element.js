import { ElButton } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElButton, {
    locale: zhCn
  })
}
