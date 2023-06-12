import { useState } from "react";
import MainAreaItem from "../components/mainArea";
import {
    mainAreaItems,
    headerInfo,
    links,
    skills,
    languages,
} from "./help/utils";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
    const doc = new jsPDF();

    const onDownload = () => {
        const el = document.getElementById("cv");

        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight() - 90;

        html2canvas(el, { scale: 1 }).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);
            doc.save(`CV_${headerInfo.name.replaceAll(" ", "_")}`);
        });
        // doc.html(el, {
        //     async callback(doc) {
        //         await doc.save("pdf_name");
        //     },
        // });
    };

    return (
        <>
            <div id="cv" className="cv-main-container">
                <header class="cv-header">
                    <div class="cv-name">{headerInfo.name}</div>
                    <div class="cv-header-info">
                        <div class="cv-contact">
                            <h3>{headerInfo.job_description}</h3>
                            <div class="cv-contact-email">
                                {headerInfo.email}
                            </div>
                            <div class="cv-contact-phone">
                                {headerInfo.phone}
                            </div>
                            <div class="cv-contact-adress">
                                {headerInfo.adress}
                            </div>
                        </div>
                        <div class="cv-header-profile gray-bg">
                            <div className="title">Profile</div>
                            <div class="profile-text">{headerInfo.profile}</div>
                        </div>
                    </div>
                </header>
                <hr />
                <div className="cv-info">
                    <div className="cv-info-left">
                        {mainAreaItems.map((item) => {
                            return <MainAreaItem data={item} />;
                        })}
                    </div>
                    <div className="cv-info-right">
                        <div className="cv-links gray-bg">
                            <div className="title">Links</div>
                            {links.map((item) => {
                                return <a href={item.link}>{item.title}: {item.link}</a>;
                            })}
                        </div>
                        <div className="cv-skills gray-bg">
                            <div className="title">Skills</div>
                            {skills.map((skill) => {
                                return (
                                    <div className="dotted-list">
                                        <div>{skill.title}</div>
                                        <div className="dots"></div>
                                        <div>{`${skill.level}/5`}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="cv-languages gray-bg">
                            <div className="title">Languages</div>
                            {languages.map((item) => {
                                return (
                                    <div className="dotted-list">
                                        <div>{item.title}</div>
                                        <div className="dots"></div>
                                        <div>{item.level}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => onDownload()} className="download-pdf-btn">
                Baixar PDF
            </button>
        </>
    );
}

export default App;
