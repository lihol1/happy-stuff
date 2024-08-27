export const shuffle = (arr) => [...arr].sort(()=> 0.5 - Math.random());

export const buildUrl = (url, params) => {
    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {       
        //перед первым парметром ставим "?", перед остальными - "&"
        const sign = !i ? '?' : "&";
        if ( key=='title') {
            urlWithParams+=`${sign}q=${value}`
        } else if ( key=='categoryId') { 
            urlWithParams+=`${sign}category.id=${value}`
        } else if ( key=='page') { 
            urlWithParams+=`${sign}_page=${value}`
        } else if ( key=='limit') { 
            urlWithParams+=`${sign}_limit=${value}`
        } else if ( key=='price_min'){
            urlWithParams+= `${sign}price_gte=${value}`
        }else if ( key=='price_max'){
            urlWithParams+= `${sign}price_lte=${value}`
        } else {
            urlWithParams+= `${sign}${key}=${value}`            
        }
    });
//http://localhost:3005/products?categoryId=1&limit=5&offset=0&q=&price_gte=0&price_lte=200000
    return urlWithParams;
}

export const sumBy = (arr) => arr.reduce((prev, cur)=> prev + cur, 0)

