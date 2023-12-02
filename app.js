// expressを使用する
const express = require('express')
// expressを実行する
const app= express()
const port = 3000
// 配列にするのが望ましい
// POSTした時に上書きされてしまう
let dailyReport = {}

// JSONを使えるようにする
app.use(express.json())

// 日報作成
app.post("/daily-report", (req, res) => {
  dailyReport = req.body

  // 未入力があったら失敗
  if (!(dailyReport.date && dailyReport.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }
  res.json({
    "ok": true,
    "dailyReport": dailyReport
  })
})

// 一覧取得
app.get("/daily-report", (req, res) => {
  res.json({
    "ok": true,
    "dailyReport": [
      dailyReport
    ]
  })
})

// 待ち受け
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})