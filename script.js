class movie {
    constructor(title, director, year){
        this.title=title
        this.director=director
        this.year=year
    }
}
document.querySelector("#f").addEventListener('submit', addamovie)

function addamovie (e) {
e.preventDefault()
const title=document.querySelector("#t").value ;
const director=document.querySelector("#d").value ;
const year=document.querySelector("#y").value ;
const Movie=new movie(title, director, year)
proceed(Movie)
document.querySelector("#t").value=""
document.querySelector("#d").value=""
document.querySelector("#y").value=""
}
proceed=(movie)=>{ 
    const list=document.getElementById("tablebody")
    const row=document.createElement("tr")
    row.innerHTML="<td>"+movie.title+"</td> <td>"+movie.director+"</td> <td>"+movie.year+"</td>"
    list.appendChild(row)
}