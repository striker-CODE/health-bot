import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <p>Health BOT</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
            <div className="greet">
              <p><span>Health BOT:</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>You’ll find explanations of diseases and conditions, including symptoms, causes, treatment options and more.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Got questions about specific medications? Wondering how to use a walker or crutches? Find out how they work, why and why they’re used.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Better understand why you might need specific tests.How to prepare for them, what the results mean and possible next steps.

</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Sore throat? Foot pain? Dry skin? Browse our A-Z list to discover what commonly causes symptoms, things you can do to feel better, how to prevent them.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            May display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
