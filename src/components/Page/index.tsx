
import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';


import { Container, Spacer } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
            'Accessories',
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            children
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Lorem Lorem Lorem Ipsum"
              />
            }
          />
          ))}
        </div>

          <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
