import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ButtonIcon from '~/client/components/ButtonIcon';
import EthereumContainer from '~/client/components/EthereumContainer';
import { addPendingTransaction } from '~/client/store/ethereum/actions';
import {
  isFestivalInitialized,
  initializeFestival,
  INITIALIZE_FESTIVAL,
} from '~/common/services/contracts/festivals';
import {
  usePendingTransaction,
  useOwnerAddress,
} from '~/client/hooks/ethereum';

const ContractsFestivals = ({ chainId }) => {
  const dispatch = useDispatch();
  const { isPending } = usePendingTransaction({
    txMethod: INITIALIZE_FESTIVAL,
    params: { chainId },
  });
  const owner = useOwnerAddress();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const getInitializedStatus = async () => {
      const state = await isFestivalInitialized(chainId);
      setIsInitialized(state);
    };
    getInitializedStatus();
  }, [chainId, isPending]);

  const onClick = async () => {
    const { txHash, txMethod } = await initializeFestival(owner, chainId);
    dispatch(addPendingTransaction({ txHash, txMethod, params: { chainId } }));
  };

  return (
    <EthereumContainer>
      <ButtonIcon disabled={isInitialized} onClick={onClick}>
        Initialize Festival
      </ButtonIcon>
    </EthereumContainer>
  );
};

ContractsFestivals.propTypes = {
  chainId: PropTypes.string.isRequired,
};

export default ContractsFestivals;
