import React, { useState } from "react"
// import img from "../../public/img/article/article1.png";

function ArticleImgs () {

    const ArtiImgs = [
        {
            id: 1,
            img: "/img/article/article1.png"
        },
        {
            id:2,
            img: "/img/article/article2.png"
        },
        {
            id:3,
            img: "/img/article/article3.png"
        },
        {
            id:4,
            img: "/img/article/article4.png"
        },
        {
            id:5,
            img: "/img/article/article5.png"
        },
        {
            id:6,
            img: "/img/article/article6.png"
        },
        {
            id:7,
            img: "/img/article/article7.png"
        },
        {
            id:8,
            img: "/img/article/article8.png"
        },
        {
            id:9,
            img: "/img/article/article9.png"
        },
        {
            id:10,
            img: "/img/article/article10.png"
        },
        {
            id:11,
            img: "/img/article/article11.png"
        },
        {
            id:12,
            img: "/img/article/article12.png"
        },
        {
            id:13,
            img: "/img/article/article13.png"
        }
    ]

    return (
        <div>
             {ArtiImgs.map((item) => (
                <img key={item.id} src={item.img} alt="articleImage" className="img-absolute" />
            )
            )}
        </div>
    )
}

export default ArticleImgs;