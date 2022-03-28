import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { MenuItem, TextField, Button, useTheme } from '@mui/material';
/* styles */
import styles from '../styles/FormArea.module.css';
import { styled } from '@mui/material/styles';
/* animation */
import animations from '../animation/animation.module.css';
/* components */
import BottomPopover from './BottomPopover';
/* modules */
const Encoding = require('encoding-japanese');

/* styling */
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary
  },
  '& label': {
    color: theme.palette.text.primary
  },
  '& label.Mui-focused': {
    color: theme.palette.text.primary
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.divider
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: theme.palette.divider
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.divider
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary
  }
}));

interface Inputs {
  grade: string;
  department: string;
  number: string;
  name: string;
}

interface Props {
  updateVisitor: (str: string) => void;
}

const FormArea: React.VFC<Props> = ({ updateVisitor }) => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const number = data.number.replace(/[,\n\s]+/, '');
    const name = data.name.replace(/[,\n\s]+/, '');

    const visitorInfo = 'kthtl,' + data.grade + ',' + data.department + ',' + number + ',' + name;
    // encoding
    const codeArray = Encoding.stringToCode(visitorInfo);
    const utfArray = Encoding.convert(codeArray, {
      to: 'UTF8',
      from: Encoding.detect(codeArray)
    });

    updateVisitor(Encoding.codeToString(utfArray));
  };

  return (
    <div className={`${styles.form_view} ${animations.fadeUp}`}>
      <h1 className={styles.form_title}>入場者情報</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.input_area}>
          <StyledTextField
            {...register('grade', { required: true })}
            fullWidth
            defaultValue=""
            label="学年"
            variant={theme.palette.mode === 'light' ? 'outlined' : 'filled'}
            helperText={errors.grade && <span className={styles.form_label_span}> *学年を選択してください</span>}
            select
          >
            <MenuItem value={'B1'}>B1</MenuItem>
            <MenuItem value={'B2'}>B2</MenuItem>
            <MenuItem value={'B3'}>B3</MenuItem>
            <MenuItem value={'B4'}>B4</MenuItem>
            <MenuItem value={'M1'}>M1</MenuItem>
            <MenuItem value={'M2'}>M2</MenuItem>
            <MenuItem value={'D1'}>D1</MenuItem>
            <MenuItem value={'D2'}>D2</MenuItem>
            <MenuItem value={'D3'}>D3</MenuItem>
            <MenuItem value={'教員'}>教員</MenuItem>
            <MenuItem value={'その他'}>その他</MenuItem>
          </StyledTextField>
        </div>

        <div className={styles.input_area}>
          <StyledTextField
            {...register('department', { required: true })}
            className={styles.form_input}
            fullWidth
            label="所属"
            defaultValue=""
            variant={theme.palette.mode === 'light' ? 'outlined' : 'filled'}
            helperText={errors.department && <span className={styles.form_label_span}> *所属を選択してください</span>}
            select
          >
            <MenuItem value={'1系'}>1系</MenuItem>
            <MenuItem value={'2系'}>2系</MenuItem>
            <MenuItem value={'3系'}>3系</MenuItem>
            <MenuItem value={'4系'}>4系</MenuItem>
            <MenuItem value={'5系'}>5系</MenuItem>
            <MenuItem value={'未所属'}>未所属</MenuItem>
          </StyledTextField>
        </div>

        <div className={styles.input_area}>
          <StyledTextField
            type="input"
            {...register('number', {
              required: '*学籍番号を入力してください',
              pattern: {
                value: /[^,\n\s]+/,
                message: ' *カンマ及びスペースを含めないでください'
              }
            })}
            fullWidth
            className={styles.input}
            label="学籍番号"
            helperText={
              errors.number && (
                <span className={styles.form_label_span}>
                  <ErrorMessage errors={errors} name="number" />
                </span>
              )
            }
            variant={theme.palette.mode === 'light' ? 'outlined' : 'filled'}
          />
        </div>

        <div className={styles.input_area}>
          <StyledTextField
            type="input"
            {...register('name', {
              required: '*氏名を入力してください',
              pattern: {
                value: /[^,\n\s]+/,
                message: ' *カンマ及びスペースを含めないでください'
              }
            })}
            fullWidth
            className={styles.input}
            label="氏名"
            helperText={
              errors.name && (
                <span className={styles.form_label_span}>
                  <ErrorMessage errors={errors} name="name" />
                </span>
              )
            }
            variant={theme.palette.mode === 'light' ? 'outlined' : 'filled'}
          />
        </div>

        <div className={styles.button_area}>
          <Button type="submit" variant="contained" color="primary" size="large" className={styles.button}>
            QRコードを生成する
          </Button>
        </div>

        <div className={styles.buttom_popover}>
          <BottomPopover />
        </div>
      </form>
    </div>
  );
};

export default FormArea;
