import {AppRegistry} from 'react-native';
import RNDemo from "./src/RNDemo";
import Bananas from "./src/module/Bananas";
import LotsOfGreentings from "./src/module/Greeting";
import BlinkApp from "./src/module/Blink"; //state（状态）
import LotsOfStyles from "./src/module/LotsOfStyles"; //样式
import FixedDimensionsBasics from "./src/module/FixedDimensionsBasics"; //高度与宽度
import FlexDirectionBasics from "./src/module/FlexDirectionBasics"; //使用Flexbox布局
import PizzaTranslator from "./src/module/PizzaTranslator"; //处理文本输入
import IScrolledDownAndWhatHappenedNextShockedMe from "./src/module/IScrolledDownAndWhatHappenedNextShockedMe"; //如何使用滚动视图
import FlatListBasics from "./src/module/FlatListBasics"; //如何使用长列表
import Fetch from "./src/module/Fetch";

AppRegistry.registerComponent('AwesomeProject2', () => Fetch);
