import night from '../../gallery/mountainight.png'
import day from '../../gallery/mountainoon.png'
import o1d from '../../gallery/Weather Conditions - OpenWeatherMap_files/01d@2x.png'
import o1n from '../../gallery/Weather Conditions - OpenWeatherMap_files/01n@2x.png'
import o2d from '../../gallery/Weather Conditions - OpenWeatherMap_files/02d@2x.png'
import o2n from '../../gallery/Weather Conditions - OpenWeatherMap_files/02n@2x.png'
import o3d from '../../gallery/Weather Conditions - OpenWeatherMap_files/03d@2x.png'
import o3n from '../../gallery/Weather Conditions - OpenWeatherMap_files/03n@2x.png'
import o4d from '../../gallery/Weather Conditions - OpenWeatherMap_files/04d@2x.png'
import o4n from '../../gallery/Weather Conditions - OpenWeatherMap_files/04n@2x.png'
import o9d from '../../gallery/Weather Conditions - OpenWeatherMap_files/09d@2x.png'
import o9n from '../../gallery/Weather Conditions - OpenWeatherMap_files/09n@2x.png'
import o10d from '../../gallery/Weather Conditions - OpenWeatherMap_files/10d@2x.png'
import o10n from '../../gallery/Weather Conditions - OpenWeatherMap_files/10n@2x.png'
import o11d from '../../gallery/Weather Conditions - OpenWeatherMap_files/11d@2x.png'
import o11n from '../../gallery/Weather Conditions - OpenWeatherMap_files/11n@2x.png'
import o13d from '../../gallery/Weather Conditions - OpenWeatherMap_files/13d@2x.png'
import o13n from '../../gallery/Weather Conditions - OpenWeatherMap_files/13n@2x.png'
import o50d from '../../gallery/Weather Conditions - OpenWeatherMap_files/50d@2x.png'
import o50n from '../../gallery/Weather Conditions - OpenWeatherMap_files/50n@2x.png'

const Data= {
"coord":{"lon":-85.1647,"lat":34.257},
"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"01n"}],
"base":"stations","main":{"temp":293.95,
"feels_like":294.57,"temp_min":292.9,"temp_max":295.38,"pressure":1007,"humidity":95},"visibility":10000,
"wind":{"speed":1.67,"deg":243,"gust":5.44},"clouds":{"all":94},
"dt":1660564505,"sys":{"type":2,"id":2009938,
"country":"US","sunrise":1660561318,"sunset":1660609713},
"timezone":0,"id":4219762,"name":"Rome","cod":200
}

function mountimg(props){
    if (props.includes('d')){
        return day
    }
    else{return night}
}
function getTime(props){
    const Days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let prop=props * 1000
    let epoch= Math.round(new Date())
    let time=new Date(prop + epoch -3600000)
    return (`${Days[time.getDay()]}  ${time.getHours()} : ${time.getMinutes()}`)
}

function getlogo(x){
    if(x == '01d'){return o1d }
    else if (x=='01n'){return o1n}
    else if (x=='02d'){return o2d}
    else if (x=='02n'){return o2n}
    else if (x=='03d'){return o3d}
    else if (x=='03n'){return o3n}
    else if (x=='04d'){return o4d}
    else if (x=='04n'){return o4n}
    else if (x=='09d'){return o9d}
    else if (x=='09n'){return o9n}
    else if (x=='10d'){return o10d}
    else if (x=='10n'){return o10n}
    else if (x=='11d'){return o11d}
    else if (x=='11n'){return o11n}
    else if (x=='13d'){return o13d}
    else if (x=='13n'){return o13n}
    else if (x=='50d'){return o50d}
    else if (x=='50n'){return o50n}
    else{return '01d'}
}
export {Data,mountimg,getlogo,getTime}