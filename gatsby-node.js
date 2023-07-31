// console.log({ env: process.env });

exports.createPages = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 30 * 60 * 1000)
  })
}
