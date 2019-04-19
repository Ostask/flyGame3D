import * as THREE from 'three'
import '../img/riverside_down.BMP'
import '../img/riverside_east.BMP'
import '../img/riverside_north.BMP'
import '../img/riverside_south.BMP'
import '../img/riverside_up.BMP'
import '../img/riverside_west.BMP'


class GAME {
    constructor(id){
        this.id = id
        this.gameStatus = false
        this.gameInited = false
        this.renderer = {}
        this.scene = {}
        this.camera = {}
        this.mouseX = 0
        this.mouseY = 0
        this.winWidth = document.getElementById(id).clientWidth
        this.winHeight = document.getElementById(id).clientHeight
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
        if(!this.gameInited){
            this.initThree()
            this.animate()
        }
       //设置关卡
       //设置键盘操控类 
    }
    initThree(){
        //初始化renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias:true
        })
        this.renderer.setSize(this.winWidth,this.winHeight)
        document.getElementById(this.id).appendChild(this.renderer.domElement)
        //初始化场景
        this.scene = new THREE.Scene()
        //初始化相机
        this.camera = new THREE.PerspectiveCamera(45,this.winWidth/this.winHeight,1,10000)
        this.camera.position.set(0,0,200)
        this.camera.lookAt(0,0,0)
        //初始化天空盒
        var path = "../img/riverside_";       //设置路径
        var format = '.BMP';                        //设定格式
        var urls = [
        path + 'east'+ format,     
        path + 'west'+ format,
        path + 'up' + format,
        path + 'down' + format,
        path + 'north' + format,
        path + 'south' + format
            ];
        var textureCube = new THREE.CubeTextureLoader().load( urls );

        this.scene.background = textureCube; //作为背景贴图
        //初始化飞机

    }
    animate(){
        requestAnimationFrame(()=>{
            this.animate()
        })
        
       // this.camera.rotation.x =  this.mouseY
       // this.camera.rotation.y += 0.004
        this.renderer.render(this.scene,this.camera)
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

export default GAME