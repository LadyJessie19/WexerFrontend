import './style.css'
import { useState } from 'react'
import EvaluationSelect from './EvaluationSelect'
import InterviewSelect from './InterviewSelect'
import InterviewType from './InteviewType'
import MyClientsBar from './MyClientsBar'
import PsiDocuments from './PsiDocuments'
import PsiDomain from './PsiDomain'
import ReportButton from './ReportButton'
import TestCard from './TestCard'
import RichTextBox from './TextBox'
import TinyBarButtons from './TinyBarButtons'
import Modals from '../Modals'
import Buttons from './Buttons'

const Reusable = () => {
    const [text, setText] = useState('Digite aqui')
  return (
    <>
        <div id="reusableSpace">
            <hr />
            <Buttons />
            <hr />
            <ReportButton />
            <hr />
            <InterviewSelect />
            <hr />
            <EvaluationSelect />
            <hr />
            <InterviewType />
            <hr />
            <PsiDomain />
            <hr />
            <TestCard />
            <hr />
            <TinyBarButtons />
            <hr />
            <PsiDocuments />
            <hr />
            <MyClientsBar />
            <hr />
            <RichTextBox value={text} onChange={setText} />
            <hr />
            <Modals />
            <hr />
        </div>
    </>
  )
}

export default Reusable