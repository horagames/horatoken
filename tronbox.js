const port = process.env.HOST_PORT || 9090

module.exports = {
    useZeroFourCompiler: true,
    networks: {
        development: {
            privateKey: process.env.PRIVATE_KEY_DEV,
            userFeePercentage: 100,
            feeLimit: 1e8,
            originEnergyLimit: 1e7,
            fullHost: "http://127.0.0.1:" + port,
            network_id: "9" // Match any network id
        },
        shasta: {
            privateKey: process.env.PRIVATE_KEY_SHASTA,
            userFeePercentage: 100,
            feeLimit: 1e8,
            originEnergyLimit: 1e7,
            fullHost: "https://api.shasta.trongrid.io",
            network_id: "2"
        },
        mainnet: {
            privateKey: process.env.PRIVATE_KEY_MAINNET,
            userFeePercentage: 100,
            feeLimit: 1e8,
            originEnergyLimit: 1e7,
            fullHost: "https://api.trongrid.io",
            network_id: "1"
        }
    }
};