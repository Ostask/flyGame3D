import * as THREE from 'three'
import OrbitControls from "three/examples/js/controls/OrbitControls"
import ColladaLoader from "three/examples/js/loaders/ColladaLoader"
import '../img/riverside_down.BMP'
import '../img/riverside_east.BMP'
import '../img/riverside_north.BMP'
import '../img/riverside_south.BMP'
import '../img/riverside_up.BMP'
import '../img/riverside_west.BMP'
import "../models/elf/elf.dae"
import "../models/elf/Body_tex_003.jpg"
import "../models/elf/ce.jpg"
import "../models/elf/Face_tex_002_toObj.jpg"
import "../models/elf/Hair_tex_001.jpg"



class GAME {
    constructor(id) {
        this.id = id
        this.gameStatus = false
        this.gameInited = false
        this.renderer = {}
        this.scene = {}
        this.camera = {}
        this.controls = {}
        this.mouseX = 0
        this.mouseY = 0
        this.winWidth = document.getElementById(id).clientWidth
        this.winHeight = document.getElementById(id).clientHeight
    }
    //玩家赢得比赛
    //玩家输了比赛
    //玩家第一次开始比赛
    start() {
        hide('startWin')
        this.gameStatus = true
        //播放音乐
    }
    //玩家重新开始比赛
    init() {
        //显示开始界面
        show('startWin')
        //初始化游戏和游戏引擎
        if (!this.gameInited) {
            this.initThree()
            this.animate()
        }
        //设置关卡
        //设置键盘操控类 
    }
    initThree() {
        //初始化renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        })
        this.renderer.setSize(this.winWidth, this.winHeight)
        document.getElementById(this.id).appendChild(this.renderer.domElement)
        //初始化场景
        this.scene = new THREE.Scene()
        //初始化相机
        this.camera = new THREE.PerspectiveCamera(45, this.winWidth / this.winHeight, 1, 10000)
        this.camera.position.set(0, 2, 13)
        this.camera.lookAt(0, 0, 0)

        //初始化轨道控制
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        // 如果使用animate方法时，将此函数删除 
        //controls.addEventListener( 'change', render ); 
        // 使动画循环使用时阻尼或自转 意思是否有惯性 
        this.controls.enableDamping = true;
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度       
        //controls.dampingFactor = 0.25; 
        //是否可以缩放 
        this.controls.enableZoom = true;
        //是否自动旋转 
        this.controls.autoRotate = false;
        //设置相机距离原点的最远距离 
        this.controls.minDistance = 1;
        //设置相机距离原点的最远距离 
        this.controls.maxDistance = 600;
        //是否开启右键拖拽 
        this.controls.enablePan = true;

        //初始化天空盒
        var path = "../img/riverside_";       //设置路径
        var format = '.BMP';                        //设定格式
        var urls = [
            path + 'east' + format,
            path + 'west' + format,
            path + 'up' + format,
            path + 'down' + format,
            path + 'north' + format,
            path + 'south' + format
        ];
        var textureCube = new THREE.CubeTextureLoader().load(urls);

        this.scene.background = textureCube; //作为背景贴图

        //初始化光线
        var light = new THREE.AmbientLight(0xaaaaaa);
        this.scene.add(light);
        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1)
        this.scene.add(directionalLight);

        var elf
        //初始化飞机
        var loadingManager = new THREE.LoadingManager(() => {
            elf.position.set(0, -3, 0)
            this.scene.add(elf);
        });
        var loader = new THREE.ColladaLoader(loadingManager);
        loader.load('../models/elf.dae', function (collada) {
            elf = collada.scene;
        });

    }
    animate() {
        requestAnimationFrame(() => {
            this.animate()
        })

        this.controls.update(); 
        this.renderer.render(this.scene, this.camera)
    }
}

//显示对话框
function show(id) {
    document.getElementById(id).style.display = 'block'
}

//关闭对话框
function hide(id) {
    document.getElementById(id).style.display = 'none'
}

export default GAME