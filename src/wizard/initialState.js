const initialState = {
	nav: {
		currentStep: 0,
		steps: ["network", "rpc", "strategy", "tokens", "tokens2"],
	},
	config: {
		network: {
			value: "",
			isSet: false,
		},
		rpc: {
			value: [],
			isSet: false,
			state: {
				items: [
					{
						label: process.env.DEFAULT_RPC,
						value: process.env.DEFAULT_RPC,
						isSelected: true,
					},
					...String(process.env.ALT_RPC_LIST)
						.split(",")
						.map((item) => ({
							label: item,
							value: item,
							isSelected: false,
						})),
				],
			},
		},
		strategy: {
			value: "",
			isSet: false,
		},
		tokens: {
			value: {
				tokenA: { symbol: "", address: "" },
				tokenB: { symbol: "", address: "" },
			},
			isSet: {
				tokenA: false,
				tokenB: false,
			},
		},
	},
};

module.exports = initialState;
