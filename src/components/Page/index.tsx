import { ReactNode } from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';

import { Container } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model 1',
            'Model 2',
            'Model 3',
            'Model 4',
            'Model 5',
            'Model 5',
            'Model 6',
            'Model 7',
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
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
