/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { MotiveSelectModalForm, StylesMotiveSelectModalForm } from './styles';
import useDarkMode from '../../hook/useDartkMode';
import './styles.css';
import { Modal } from 'react-responsive-modal';
import { useTheme } from '@emotion/react';
import CheckBox from './CheckBox';

const checkObj = [
  {
    key: 0,
    id: 'cb1',
    title: '용기',
  },
  {
    key: 1,
    id: 'cb2',
    title: '이직',
  },
  {
    key: 2,
    id: 'cb3',
    title: '목표',
  },
  {
    key: 3,
    id: 'cb4',
    title: '위로',
  },
  {
    key: 4,
    id: 'cb5',
    title: '성공',
  },

  {
    key: 5,
    id: 'cb6',
    title: '디자인',
  },
  {
    key: 6,
    id: 'cb7',
    title: '개발',
  },
  {
    key: 7,
    id: 'cb8',
    title: '기획',
  },
  {
    key: 8,
    id: 'cb9',
    title: '여행',
  },
];

const MotiveSelectModal = () => {
  const [modal, setModal] = useState(true);
  const [check, setCheck] = useState<any>(new Set());
  const [limit, setLimit] = useState(false);
  const [bLimit, setBLimit] = useState(false);
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  const onCloseModal = useCallback(() => {
    setModal(false);
    setLimit(false);
  }, []);

  const onCheckedHandler = (id: number, checked: boolean) => {
    if (checked) {
      check.add(id);
      setCheck(check);
    } else if (!checked && check.has(id)) {
      check.delete(id);
      setCheck(check);
    }
  };

  const onSubmit = () => {
    console.log(check);

    if (check.size > 3) {
      setLimit(true);
      setBLimit(false);
    } else if (check.size === 0) {
      setLimit(false);
      setBLimit(true);
    } else {
      setBLimit(false);
      setLimit(false);
    }
  };

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
            <h1>🎉 Motivving에 오신걸 환영해요! 🎉</h1>
            <p className="sub-1">최대 3개의 Motive를 선택해보세요</p>
            <p className="sub-2">Motive에 맞춰 영상을 추천해드려요!</p>
            <div className="checkbox">
              {checkObj.map((item) => (
                <CheckBox
                  key={item.key}
                  item={item}
                  check={check}
                  onCheckedHandler={onCheckedHandler}
                />
              ))}
            </div>
            {limit && (
              <div className="error">
                <p>Motive는 최대 3개 선택가능합니다!</p>
              </div>
            )}
            {bLimit && (
              <div className="error">
                <p>Motive는 최소 1개 이상 선택해주세요!</p>
              </div>
            )}
            <div className="button">
              <span onClick={onCloseModal}>Skip</span>
              <span onClick={onSubmit}>Confirm</span>
            </div>
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
              {checkObj.map((item) => (
                <CheckBox
                  key={item.key}
                  item={item}
                  check={check}
                  onCheckedHandler={onCheckedHandler}
                />
              ))}
            </div>
            {limit && (
              <div className="error">
                <p>Motive는 최대 3개 선택가능합니다!</p>
              </div>
            )}
            {bLimit && (
              <div className="error">
                <p>Motive는 최소 1개 이상 선택해주세요!</p>
              </div>
            )}
            <div className="button">
              <span onClick={onCloseModal}>Skip</span>
              <span onClick={onSubmit}>Confirm</span>
            </div>
          </MotiveSelectModalForm>
        </Modal>
      )}
    </>
  );
};

export default MotiveSelectModal;
