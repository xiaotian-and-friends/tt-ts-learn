// class A {
//     public static name: string = '没11';
//     public static age: string = '没11';
//     public name: string = '名字';
//     public age: number;
//     public sex: string;
//     public height: number;
//     public weight: number;
//
//     // constructor 构造函数, class 中用于接收参数 和 处理初始化数据
//     constructor({name, age, sex, height, weight}: { [k: string]: any }) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.height = height;
//         this.weight = weight;
//         A.postMessage()
//     }
//
//     static postMessage(): void {
//         console.log(`我叫${this.name}，我今年${this.age}岁，身高${this.height}cm，体重${this.weight}kg`)
//     }
//
//
//     public setName(name: string): void {
//         const oldName = this.name
//         this.name = name
//         console.log(`我的名字变了,原来叫${oldName},现在叫${this.name}`)
//     }
//
// }
//
//
// class B extends A {
//     constructor({name, age, sex, height, weight}: { [k: string]: any }) {
//         super({name, age, sex, height, weight});
//         B.postMessage()
//     }
//
// }
//
// class D extends C {
//     constructor() {
//         super();
//     }
//
// }
//
// const D = new D()
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————


type requestConfig = {
    method: string,
    url: string,
    data?: any,
    headers?: any,
    [key: string]: any
}

type reqMethod = 'post' | 'get' | 'delete' | 'put' | 'patch'

abstract class RequestEngine {
    constructor() {
    }

    post({method, url}: requestConfig): void {
        console.log('post 发送了', {method, url})
    }

    get({method, url}: requestConfig): void {
        console.log('get 发送了', {method, url})
    }

    delete({method, url}: requestConfig): void {
        console.log('delete 发送了', {method, url})
    }

    put({method, url}: requestConfig): void {
        console.log('put 发送了', {method, url})
    }

    patch({method, url}: requestConfig): void {
        console.log('patch 发送了', {method, url})
    }
}

// --------------- 延时请求 ----------------
class TimeoutRequest extends RequestEngine {
    public timer;

    constructor(timer: number) {
        super()
        this.timer = timer
    }

     sendQuery(config: requestConfig, method: reqMethod) {
        setTimeout(() => {
            this[method](config)
        }, this.timer)
    }
}


// --------------- 异步请求 ----------------

// class AwaitRequest extends RequestEngine {
//     public timer;
//
//     constructor() {
//         super()
//     }
//
//     sendQuery(config: requestConfig, method: reqMethod) {
//         const res = new Promise((resolve, reject) => {
//
//             // 异步操作
//         });
//         setTimeout(() => {
//             this[method](config)
//         }, this.timer)
//     }
// }
//
// export {TimeoutRequest}

// --------------- 小白版 ----------------

type requestConfig2 = {
    method: reqMethod2,
    url: string,
    data?: any,
    headers?: any,
    [key: string]: any
}

type reqMethod2 = 'post' | 'get' | 'delete' | 'put' | 'patch'

abstract class RequestEngine2 {
    post(url: string): void {
        console.log('post 发送了', {url})
    }

    get(url: string): void {
        console.log('get 发送了', {url})
    }

    delete(url: string): void {
        console.log('delete 发送了', {url})
    }

    put(url: string): void {
        console.log('put 发送了', {url})
    }

    patch(url: string): void {
        console.log('patch 发送了', {url})
    }
}

class TimeoutRequest2 extends RequestEngine2 {

    constructor( timer: number) {
        super()
        this.timer = timer
    }

    public timer;

    post(url: string) {
        super.post(url)
    }

    get(url: string) {
        super.get(url)
    }

    delete(url: string) {
        super.delete(url)
    }

    put(url: string) {
        super.put(url)
    }

    patch(url:string) {
        super.patch(url)
    }


    sendQuery({method, url}:requestConfig2) {
        setTimeout(() => {
            this[method](url)
        }, this.timer)
    }
}

export {TimeoutRequest2}

