class GAME {
    constructor(){
        this.gameStatus = false
    }
    //玩家赢得比赛
    //玩家输了比赛
    //玩家第一次开始比赛
    start(){
        hide('startWin')
        this.gameStatus = true
        //播放音乐
    }
    //玩家重新开始比赛
    init(){
       //显示开始界面
       show('startWin')
       //初始化游戏和游戏引擎
       //设置关卡
       //设置键盘操控类 
    }
}

//显示对话框
function show(id){
    document.getElementById(id).style.display = 'block'
}

//关闭对话框
function hide(id){
    document.getElementById(id).style.display = 'none'
}

function initThree(){

}

export default GAME