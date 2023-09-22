import { useContext, useState } from "react";
import { EthersContext } from "../../store/all-context-interface";

const useSignature = () => {
    const { address, signer } = useContext(EthersContext);
    const [signData, setSignData] = useState({});

    const signMessage = async (msg, receivedSigner = null) => {
        if (!msg || msg === '') {
            setSignData({});
            return;
        }

        const _signer = receivedSigner || (signer && signer);
        const _address = receivedSigner ? await _signer.getAddress() : address;

        const signature = await _signer.signMessage(msg);
        await signData({
            ...signData,
            signature,
            address: _address,
            message: msg
        })
    }

    return { signData, signMessage };
}

export default useSignature;