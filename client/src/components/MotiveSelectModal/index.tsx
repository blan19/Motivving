/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { MotiveSelectModalForm, StylesMotiveSelectModalForm } from './styles';
import useDarkMode from '../../hook/useDartkMode';
import './styles.css';
import { Modal } from 'react-responsive-modal';
import { useTheme } from '@emotion/react';

const MotiveSelectModal = () => {
  const [modal, setModal] = useState(true);
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);
  return (
    <>
      {isDarkMode ? (
        <Modal
          open={modal}
          onClose={onCloseModal}
          showCloseIcon={false}
          center
          classNames={{ modal: 'styled-dark' }}
        >
          <MotiveSelectModalForm
            isDarkMode={isDarkMode}
            css={StylesMotiveSelectModalForm(theme)}
          >
            <h1>🎉Motivving에 오신걸 환영해요!🎉</h1>
            <p className="sub-1">최대 3개의 Motive를 선택해보세요</p>
            <p className="sub-2">Motive에 맞춰 영상을 추천해드려요!</p>
          </MotiveSelectModalForm>
        </Modal>
      ) : (
        <Modal
          open={modal}
          onClose={onCloseModal}
          showCloseIcon={false}
          center
          classNames={{ modal: 'styled-light' }}
        >
          <MotiveSelectModalForm
            isDarkMode={isDarkMode}
            css={StylesMotiveSelectModalForm(theme)}
          >
            <h1>🎉 Motivving에 오신걸 환영해요! 🎉</h1>
            <p className="sub-1">최대 3개의 Motive를 선택해보세요</p>
            <p className="sub-2">Motive에 맞춰 영상을 추천해드려요!</p>
            <div className="checkbox">
              <input type="checkbox" name="choice" id="cb1" />
              <label htmlFor="cb1">용기</label>
              <input type="checkbox" name="choice" id="cb2" />
              <label htmlFor="cb2">이직</label>
              <input type="checkbox" name="choice" id="cb3" />
              <label htmlFor="cb3">목표</label>
            </div>
          </MotiveSelectModalForm>
        </Modal>
      )}
    </>
  );
};

export default MotiveSelectModal;
