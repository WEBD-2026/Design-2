import React from 'react'

const accomodation = () => {
    return (
        <div>
            <div className="brutalist-card">
                <div className="brutalist-card__header">
                    <img src={require("./Background/Accomodation_background.webp")} alt="Event" />
                </div>

                <div className="brutalist-card__actions">
                    <div className="brutalist-card_mess">
                    </div>


                    <div className="brutalist-card_butt">
                        <button className="btn-class-name ">
                            <button>
                                Register
                            </button>
                        </button>
                        <button className="btn-class-name">
                            <button>
                                More Info
                            </button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default accomodation