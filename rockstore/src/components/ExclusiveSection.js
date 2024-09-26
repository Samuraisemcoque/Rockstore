import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
        <div className="page-inner-content">
            <div className="content">
               <div className="left-side">
               <h2>Xiaomi Mi Band 4</h2>
              <p>
        Smart Band 4 tem um design ergonômico, que o deixa bem confortável no pulso.
        O Smart Band 4 te ajuda a ter uma vida mais saudável, com monitoramento dos seus exercícios.
        Revigore sua perda peso com 4 modos esportivos, quanto mais se mover, mais peso perderá.
        Além disso, com ele você recebe suas notificações de chamadas e *mensagens direto no pulso.
              </p>
              <Link to="/products" className="see-more-btn">
                <span>Ver Agora</span>
                <FontAwesomeIcon icon={faChevronRight}/>
              </Link>   
               </div>
                <div className="right-side">
                <img src="/images/exclusive.png"  alt="Smart Band 4" />
                </div>
            </div>
        </div>
    </div>
  )
}
