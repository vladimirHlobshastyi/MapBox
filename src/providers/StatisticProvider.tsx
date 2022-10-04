import React, { createContext, useState, useEffect } from "react"
import { getLatestStatistic } from "../api/getLatestStatistic"
import {
  StatisticDataType,
  StatistiProviderPropTypes,
  statsDataTypes
} from "./StatisticProvider.types"

export const StatisticContext = createContext({} as StatisticDataType)

const StatisticProvider = ({ children }: StatistiProviderPropTypes) => {
  const [statsResponse, setStatsResponse] = useState<StatisticDataType>(
    {} as StatisticDataType
  )
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [statsData, setStatsData] = useState<statsDataTypes>(
    {} as statsDataTypes
  )

  const getStatistic = async () => {
    
    try {
      if (errorMessage) {
        setErrorMessage("")
      }
      const response = await getLatestStatistic()

      if (response.message === "The data were fetched successfully.") {
        const responsStats = response.data
        setStatsResponse(responsStats)
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        console.log("Unexpected error", err)
      }
    }
  }

  const setStats =async () => {
    let { stats,increase } = statsResponse
    let statsData =await Object.entries(stats)
    let increaseData =await Object.entries(increase)
    setStatsData({stats:statsData,increase:increaseData})
  }

  useEffect(() => {
    getStatistic()
  }, [])

  useEffect(() => {
    if (statsResponse.stats) {
      setStats()
    }
  }, [statsResponse])

  return (
    <StatisticContext.Provider value={{ ...statsResponse, statsData }}>
      {children}
    </StatisticContext.Provider>
  )
}

export default StatisticProvider
