const $e9036bc7e4b4ba73$var$BaseURL = 'https://open-api.openocean.finance/v1/cross';
async function $e9036bc7e4b4ba73$export$433ece0ffb4f36c7(chain = 1) {
    const result = await fetch(`${$e9036bc7e4b4ba73$var$BaseURL}/tokenList?chainId=${chain}`);
    const { code: code , data: data  } = await result.json();
    if (code !== 200) throw new Error(result);
    return data;
}
async function $e9036bc7e4b4ba73$export$df96cd8d56be0ab1(chain = 1, account, inTokenAddress) {
    if (!account || !inTokenAddress) throw new Error('Account and inTokenAddress are required');
    const result = await fetch(`${$e9036bc7e4b4ba73$var$BaseURL}/getBalance?chainId=${chain}&account=${account}&inTokenAddress=${inTokenAddress}`);
    const { code: code , data: data  } = await result.json();
    if (code !== 200) throw new Error(result);
    return data;
}


export {$e9036bc7e4b4ba73$export$433ece0ffb4f36c7 as tokenList, $e9036bc7e4b4ba73$export$df96cd8d56be0ab1 as getBalance};
//# sourceMappingURL=index.mjs.map
