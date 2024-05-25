import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import Taro from "@tarojs/taro";
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json"
import {getBestQuestionResult} from "../../utils/bizUtils";


/**
 * 测试结果页面
 */
export default () => {
  const answerList = Taro.getStorageSync('answerList');
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000,
    });
  }
  const result = getBestQuestionResult(answerList, questions, questionResults);

  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTitle'>
        {result.resultDesc}
      </View>
      <AtButton className='enterBtn' type='primary' circle onClick={() => {
        // 跳转到首页
        Taro.reLaunch({
          url: '/pages/index/index'
        })
      }}
      >返回主页</AtButton>
      <Image className='headerBg'
        src={headerBg}
      />
      <GlobalFooter />
    </View>

  )
}
