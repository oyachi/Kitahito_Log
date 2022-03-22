import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@material-ui/core';
/* styles */
import styles from '../styles/InputScreen.module.css';

type Inputs = {
  grade: string;
  department: string;
  number: string;
  name: string;
};

const InputScreen: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const visitorInfo = data.grade + ',' + data.department + ',' + data.number + ',' + data.name;
    navigate('/qrcode', { state: { info: visitorInfo } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.form_area}>
        <h1 className={styles.form_title}>入場者情報</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.input_area}>
            <FormControl>
              <InputLabel id="grade_select">学年</InputLabel>
              <Select
                labelId="grade_select"
                {...register('grade', { required: true })}
                className={styles.form_input}
                fullWidth
                label="学年"
                defaultValue=""
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
              </Select>
            </FormControl>
            {errors.number && <span className={styles.form_label_span}> *学年を選択してください</span>}
          </div>

          <div className={styles.input_area}>
            <FormControl>
              <InputLabel id="department_select">所属</InputLabel>
              <Select
                labelId="department_select"
                {...register('department', { required: true })}
                className={styles.form_input}
                fullWidth
                label="所属"
                defaultValue=""
              >
                <MenuItem value={'1系'}>1系</MenuItem>
                <MenuItem value={'2系'}>2系</MenuItem>
                <MenuItem value={'3系'}>3系</MenuItem>
                <MenuItem value={'4系'}>4系</MenuItem>
                <MenuItem value={'5系'}>5系</MenuItem>
                <MenuItem value={'未所属'}>未所属</MenuItem>
              </Select>
            </FormControl>
            {errors.number && <span className={styles.form_label_span}> *所属を選択してください</span>}
          </div>

          <div className={styles.input_area}>
            <TextField
              type="text"
              {...register('number', { required: true })}
              fullWidth
              className={styles.input}
              label="学籍番号"
              helperText={errors.number && <span className={styles.form_label_span}> *学籍番号を入力してください</span>}
            />
          </div>

          <div className={styles.input_area}>
            <TextField
              type="text"
              {...register('name', { required: true })}
              fullWidth
              className={styles.input}
              label="氏名"
              helperText={errors.number && <span className={styles.form_label_span}> *氏名を入力してください</span>}
            />
          </div>

          <Button type="submit" className={styles.button}>
            <span className={styles.button_span}>QR generate</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InputScreen;
