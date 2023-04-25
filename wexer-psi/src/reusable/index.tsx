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
import SearchInputWexer from './SearchInputWexer'
import DropdownList from './DropdownList'

const Reusable = () => {
    const [text, setText] = useState('Digite aqui')
    /* Type 'string' is not assignable to type '{ id: number; label: string; }' */
    const items = [
      {
        id: 1,
        label: 'item 1'
      },
      {
        id: 2,
        label: 'item 2'
      },
      {
        id: 3,
        label: 'item 3'
      }
    ]
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
            <SearchInputWexer />
            <hr />
            <DropdownList title={'Lista'} items={[ items[0], items[1], items[2]]} />
        </div>
    </>
  )
}

export default Reusable