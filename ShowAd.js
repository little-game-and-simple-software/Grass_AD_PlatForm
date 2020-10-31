//初始化获得广告图像 需要优先运行
function getAdImageNode(){

ImageAd=document.getElementById("Ad")

RandomAdShowTest()
}
function RandomAdShowTest()
{
	//默认随机生成0-1之间的数 *10之后范围变成0-10
	//floor方法是数学中的去尾法 去除小数结尾的数字 保留整数
	//从Main.js生成随机数 需要将随机数存入全局变量
	//打开新的广告页面时 加载完成 需要获得生成的随机数
	//根据随机数来选择如何显示对应的广告
	var FirstRandomNumber=Math.random()*5
	var ResultNumber=Math.floor(FirstRandomNumber)
	console.log(ResultNumber)
	console.log("测试随机数")
	if(ResultNumber==1)
	{
	ImageAd.src="Ads/小沙盒工作室.jpg"
	}
	else if(ResultNumber==2)
	{
	ImageAd.src="Ads/啤酒广告.webp"
	}
	else if(ResultNumber==3)
	{
	ImageAd.src="Ads/蛋糕广告.webp"
	}
	else if(ResultNumber==4)
	{
	ImageAd.src="Ads/玩科光电.jpg"
	}
}
//getAdImageNode()