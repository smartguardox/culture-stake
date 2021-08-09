import React, { Fragment, Suspense } from 'react';
import styled from 'styled-components';

import ButtonGroup from '~/client/components/ButtonGroup';
import ButtonIcon from '~/client/components/ButtonIcon';
import ColorSection from '~/client/components/ColorSection';
import ThreeSplash from '~/client/components/ThreeSplash';
import View from '~/client/components/View';
import translate from '~/common/services/i18n';
import { ContainerStyle, HorizontalSpacingStyle } from '~/client/styles/layout';
import { ParagraphStyle } from '~/client/styles/typography';
import diagram from '~/client/assets/images/CultureStake-Diagram.svg';
import InlineSVG from '~/client/components/InlineSVG';
import { HeadingPrimaryStyle } from '~/client/styles/typography';

const FURTHERFIELD_URL = 'https://www.furtherfield.org';

const Homepage = () => {
  return (
    <Fragment>
      <View>
        <ThreeSplash />

        <ColorSection>
          <ContainerStyle>
            <ParagraphStyle>
              {translate('Homepage.bodyIntroduction')}
            </ParagraphStyle>

            <ParagraphStyle>
              {translate('Homepage.bodyIntroductionSecondary')}
            </ParagraphStyle>

            <ul>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodySecondBulletOne')}
                </ParagraphStyle>
              </li>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodySecondBulletTwo')}
                </ParagraphStyle>
              </li>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodySecondBulletThree')}
                </ParagraphStyle>
              </li>
            </ul>

            <ParagraphStyle>
              {translate('Homepage.bodyIntroductionThird')}
            </ParagraphStyle>

            <ul>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyThirdBulletOne')}
                </ParagraphStyle>
              </li>
            </ul>

            <ParagraphStyle>
              {translate('Homepage.bodyThirdBulletOneFollowup')}
            </ParagraphStyle>

            <ul>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyThirdBulletTwo')}
                </ParagraphStyle>
              </li>
            </ul>

            <ParagraphStyle>
              {translate('Homepage.bodyThirdBulletTwoFollowup')}
            </ParagraphStyle>

            <ul>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyThirdBulletThree')}
                </ParagraphStyle>
              </li>
            </ul>

            <ParagraphStyle>
              {translate('Homepage.bodyThirdBulletThreeFollowup')}
            </ParagraphStyle>

            <HorizontalSpacingStyle />

            <VideoItem />

            <HorizontalSpacingStyle />

            <HeadingPrimaryStyle>
              {translate('Homepage.headingOne')}
            </HeadingPrimaryStyle>

            <HorizontalSpacingStyle />

            <ParagraphStyle>
              {translate('Homepage.bodyIntroductionFourth')}
            </ParagraphStyle>

            <ul>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyFourthBulletOne')}
                </ParagraphStyle>
              </li>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyFourthBulletTwo')}
                </ParagraphStyle>
              </li>
              <li>
                <ParagraphStyle>
                  {translate('Homepage.bodyFourthBulletThree')}
                </ParagraphStyle>
              </li>
            </ul>

            <ParagraphStyle>
              {translate('Homepage.bodyIntroductionFifth')}
            </ParagraphStyle>

            <ParagraphStyle>{translate('Homepage.bodySixth')}</ParagraphStyle>

            <HorizontalSpacingStyle />

            <HeadingPrimaryStyle>
              {translate('Homepage.headingTwo')}
            </HeadingPrimaryStyle>

            <HorizontalSpacingStyle />

            <ParagraphStyle>{translate('Homepage.bodySeventh')}</ParagraphStyle>

            <ParagraphStyle>{translate('Homepage.bodyEighth')}</ParagraphStyle>

            <ParagraphStyle>{translate('Homepage.bodyNinth')}</ParagraphStyle>

            <HorizontalSpacingStyle />

            <HorizontalSpacingStyle />

            <HeadingPrimaryStyle>
              {translate('Homepage.headingThree')}
            </HeadingPrimaryStyle>

            <ParagraphStyle>
              <strong>{translate('Homepage.bodyQuestion')}</strong>
              {translate('Homepage.bodyAnswer')}
            </ParagraphStyle>

            <ParagraphStyle>
              <strong>{translate('Homepage.bodyQuestionSecond')}</strong>
              {translate('Homepage.bodyAnswerSecond')}
            </ParagraphStyle>

            <ParagraphStyle>
              <strong>{translate('Homepage.bodyQuestionThird')}</strong>
              {translate('Homepage.bodyAnswerThird')}
              <a
                href="mailto:charlotte.frost@furtherfield.org"
                style={{ color: '#ba00ff' }}
              >
                Charlotte Frost
              </a>
            </ParagraphStyle>

            <HorizontalSpacingStyle />

            <Suspense fallback={null}>
              <Diagram />
            </Suspense>

            <ButtonGroup>
              <ButtonIcon to="/festivals">
                {translate('Homepage.buttonViewFestivals')}
              </ButtonIcon>

              <ButtonIcon href={FURTHERFIELD_URL}>
                {translate('Homepage.buttonFurtherfield')}
              </ButtonIcon>
            </ButtonGroup>
          </ContainerStyle>
        </ColorSection>
      </View>
    </Fragment>
  );
};

const Diagram = () => {
  return <InlineSVG url={diagram} />;
};

const VideoItem = () => {
  return (
    <VideoItemStyle
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      src="https://player.vimeo.com/video/523730680?title=0&byline=0"
    ></VideoItemStyle>
  );
};

const VideoItemStyle = styled.iframe`
  @media max-width 500px {
    height: 20rem;
  }

  width: 100%;
  height: 50rem;
`;

export default Homepage;
