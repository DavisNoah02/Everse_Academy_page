// import { useEffect, useState } from "react"

// export function useCountdown() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   })

//   useEffect(() => {
//     const launchDate = new Date()
//     launchDate.setDate(launchDate.getDate() + 30)

//     const timer = setInterval(() => {
//       const now = new Date().getTime()
//       const distance = launchDate.getTime() - now

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24))
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000)

//       setTimeLeft({ days, hours, minutes, seconds })

//       if (distance < 0) {
//         clearInterval(timer)
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//       }
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   return timeLeft
// }