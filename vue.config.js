// module.exports = {
//     publicPath: process.env.publicPath === 'production' ?
//         '/TT-page/' : '/'
// }

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/FlyData/'
        : '/'
}