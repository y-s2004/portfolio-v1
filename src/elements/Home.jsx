import React from 'react'
import '../css/Home.css'
import iconImage from '../images/IMG_0380.GIF'
import Header from './Header'

export default function Home() {
    return (
        <div className="home-container">
            <div className="intro-section">
                <img src={iconImage} alt="プロフィール" className="profile-image" />
                <div>
                    <h1 className="name">Y.S</h1>
                    <p className="title">ジュニアエンジニア</p>
                </div>
            </div>

            <Header />

            <div className="profile-box">
                <h2>プロフィール</h2>
                    <p>
                        学生時代にITに興味を持ち、個人でWebページの作成を始めました。
                    </p>
                <h2>大切にしていること</h2>
                    <p>
                        お客様が大切にしていることを、私自身も大切にしながら仕事を行うことです。<br />
                        そうすることで、お客様の満足のいくものを提供できると考えています。
                    </p>
                <h2>スキル</h2>
                    <ul>
                        <li>React / JavaScript</li>
                        <li>Spring Boot / Java</li>
                        <li>PostgreSQL / Docker</li>
                        <li>GitHub</li>
                    </ul>
            </div>
        </div>
    )
}