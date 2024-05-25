import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'

/**
 * 主页
 */
export default () => {
  return (
    <View className='index'>
      <View className='at-article__h1'>
        这是一级标题这是一级标题
      </View>
      <View className='at-article__h2'>
        这是一级标题这是一级标题
      </View>
      <AtButton type='primary' circle>按钮文案</AtButton>
      <Image
        src={headerBg}
      />
    </View>

  )
}
