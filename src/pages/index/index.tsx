import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";

/**
 * 主页
 */
export default () => {
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2 subTitle'>
        只需两分钟，就能非常准确地描述出你是谁，以及你的性格特点
      </View>
      <AtButton className='enterBtn' type='primary' circle onClick={() =>{
        // 跳转到答题页
        Taro.navigateTo({
          url: '/pages/doQuestion/index'
        })
      }}
      >开始测试</AtButton>
      <Image className='headerBg'
        src={headerBg}
      />
      <GlobalFooter />
    </View>

  )
}
