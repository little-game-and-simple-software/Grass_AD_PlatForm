<?php
//草根广告联盟 后台php --开发者128hh
//.把字符串相加 而不是js里面的+
//echo "hello";
$ImageStoreUrl="https://littlegame.opvs.me/Grass_AD_PlatForm/Ads/";
$RandomValue=0;
$resultImageUrl="";
function GenRandomValue()
{
  global $resultImageUrl ;
  global $ImageStoreUrl;
  #使用Math模块 不需要使用Math.rando()这样子来调用
  $RandomValue=rand(0,3);
  if($RandomValue==0)
  {
    $resultImageUrl=$ImageStoreUrl."啤酒广告.jpg";
  }
  else if($RandomValue==1)
  {
    $resultImageUrl=$ImageStoreUrl."啤酒广告.webp";
  }
  else if($RandomValue==2)
  {
    $resultImageUrl=$ImageStoreUrl."蛋糕广告.webp";
  }
  else if($RandomValue==3)
  {
    $resultImageUrl=$ImageStoreUrl."玩科光电.jpg";
  }
  echo $resultImageUrl;
}

GenRandomValue();
 ?>
