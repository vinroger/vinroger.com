'use client';

import { useCallback, useEffect, useState } from 'react';

type CopyStatus = 'inactive' | 'copied' | 'failed' | 'loading';

const useCopyToClipboard = (): {
  copy: (text: string) => void;
  status: CopyStatus;
  supported: boolean;
} => {
  const [status, setStatus] = useState<CopyStatus>('inactive');
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    setSupported(!!navigator?.clipboard);
  }, []);

  const copy = useCallback(
    (text: string) => {
      if (!supported) {
        setStatus('failed');
        return;
      }

      setStatus('loading');
      navigator.clipboard.writeText(text).then(
        () => setStatus('copied'),
        () => setStatus('failed')
      );
    },
    [supported]
  );

  useEffect(() => {
    if (status === 'copied') {
      const timer = setTimeout(() => {
        setStatus('inactive');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return { copy, status, supported };
};

export default useCopyToClipboard;
