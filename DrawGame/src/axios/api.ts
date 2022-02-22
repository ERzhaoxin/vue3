import request from "./index";

const baseUrl = 'http://localhost:8081';

//添加图片
export const addNewCanvas = async (obj: any) => {
    return request({
        url: baseUrl + '/api/pixel/addNewArt',
        method: "get",
        params: obj,
    });
};