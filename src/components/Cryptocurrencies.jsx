import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCrytosQuery } from '../services/cryptoApi'



export const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100
  const { data, isFetching } = useGetCrytosQuery(count)
  let coins = []
  if (data !== undefined) coins = data.data.coins
  const [searchTerm,setSearchTerm] = useState('')

 
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins.map((coin,index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}.${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p>Daily Change: {millify(coin.change)}</p>
              
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
