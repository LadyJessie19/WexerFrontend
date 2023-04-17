type QuestionCardProps = {
  radioInput: boolean;
  firstQuestion?: string;
  extraInput: boolean;
  secondQuestion?: string;
};

const QuestionCard = ({
  radioInput,
  firstQuestion,
  extraInput,
  secondQuestion,
}: QuestionCardProps) => {
  return (
    <>
      <div className="questionCard">
        {radioInput && (
          <>
            <div>
              <label>
                <strong>{firstQuestion}</strong>
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="yesno" value="yes" />
                Sim
              </label>
              <label>
                <input type="radio" name="yesno" value="no" checked />
                Não
              </label>
            </div>
          </>
        )}
        {extraInput && (
          <div>
            <label>
              <strong>{secondQuestion}</strong>
            </label>
            <input type="text" placeholder="Resposta" />
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionCard;
