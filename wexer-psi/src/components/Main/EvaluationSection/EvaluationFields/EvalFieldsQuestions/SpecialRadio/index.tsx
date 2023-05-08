type SpecialRadioProps = {
    firstQuestion: string;
    arrayOptions: string[];
    extraInput: boolean;
    secondQuestion?: string;
  };  
  
  const SpecialRadio = ({
    firstQuestion,
    arrayOptions,
    extraInput,
    secondQuestion,
  }: SpecialRadioProps) => {
    return (
      <>
        <div className="questionCard">
          <div>
            <label>
              <strong>{firstQuestion}</strong>
            </label>
          </div>
          <div>
                {arrayOptions.map((item) => {
                    return (<label>
                        <input type="radio" name="options" value="yes" />
                        {item}
                      </label>)
                })}
          </div>
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
  
  export default SpecialRadio;
  