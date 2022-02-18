// 定义一个接口，约束state的数据类型
export interface Nav {
    name: string,
    path: string,
    http?: boolean,
    url?: string,
}