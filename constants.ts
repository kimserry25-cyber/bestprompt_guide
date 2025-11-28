

import { Chapter } from './types';
import { BookOpen, Zap, Brain, PenTool, Star } from 'lucide-react';

export const CURRICULUM: Chapter[] = [
  {
    id: 'beginner',
    title: '완전 초보 가이드',
    icon: BookOpen,
    sections: [
      {
        id: 'step-1',
        title: '1단계: AI가 뭔가요?',
        description: 'AI의 기본 개념과 주요 서비스, 그리고 일상생활 활용 예시',
        blocks: [
          {
            type: 'header',
            content: '🤖 쉽게 설명하면'
          },
          {
            type: 'paragraph',
            content: 'AI (인공지능)는 똑똑한 컴퓨터 친구라고 생각하시면 됩니다!'
          },
          {
            type: 'list',
            content: [
              '✅ 질문에 답해줍니다',
              '✅ 글을 써줍니다',
              '✅ 코드를 만들어줍니다',
              '✅ 아이디어를 제안합니다',
              '✅ 번역도 해줍니다'
            ]
          },
          {
            type: 'header',
            content: '🌟 대표적인 AI 서비스'
          },
          {
            type: 'table',
            content: {
              headers: ['AI 이름', '특징', '무료 사용'],
              rows: [
                ['ChatGPT', '가장 유명, 대화에 강함', '✅ 가능'],
                ['Claude', '긴 문서 처리에 강함', '✅ 가능'],
                ['Gemini', '구글 제품, 최신 정보 검색', '✅ 가능'],
                ['Copilot', '마이크로소프트 제품', '✅ 가능']
              ]
            }
          },
          {
            type: 'header',
            content: '💡 일상생활 예시'
          },
          {
            type: 'sub-header',
            content: 'AI 없이:'
          },
          {
            type: 'paragraph',
            content: '나: (30분 동안 구글 검색하며) "김치볶음밥 만드는 법..."'
          },
          {
            type: 'sub-header',
            content: 'AI와 함께:'
          },
          {
            type: 'paragraph',
            content: '나: "2인분 김치볶음밥 레시피를 초보자도 따라할 수 있게 알려줘"\nAI: "1. 재료 준비: 밥 2공기, 김치 1/2컵...\n 	2. 팬에 기름을 두르고...\n 	3. 김치를 먼저 볶고..."\n→ 5초 만에 상세한 레시피 완성!'
          }
        ]
      },
      {
        id: 'step-2',
        title: '2단계: 프롬프트란 무엇인가요?',
        description: '프롬프트의 정의와 좋은 프롬프트 vs 나쁜 프롬프트 비교',
        blocks: [
          {
            type: 'header',
            content: '📝 프롬프트의 정의'
          },
          {
            type: 'paragraph',
            content: '프롬프트 = AI에게 하는 질문이나 부탁\n친구에게 부탁하는 것과 똑같습니다!'
          },
          {
            type: 'header',
            content: '🎯 좋은 프롬프트 vs 나쁜 프롬프트'
          },
          {
            type: 'sub-header',
            content: '❌ 나쁜 예시 (모호한 프롬프트)'
          },
          {
            type: 'code',
            content: '"이메일 써줘"',
            language: 'text'
          },
          {
            type: 'paragraph',
            content: '문제점: - 누구한테 보내는 이메일? - 무슨 내용? - 격식체? 친근하게?\nAI의 반응:\nAI: "어떤 이메일을 작성해드릴까요?\n 	받는 사람과 목적을 알려주세요."'
          },
          {
            type: 'sub-header',
            content: '✅ 좋은 예시 (명확한 프롬프트)'
          },
          {
            type: 'code',
            content: '"거래처 담당자에게 보낼 미팅 일정 변경 요청 이메일을\n정중하고 공손한 톤으로 작성해줘.\n다음 주 화요일에서 목요일로 변경하고 싶다고 전해줘."',
            language: 'text'
          },
          {
            type: 'paragraph',
            content: 'AI의 반응:\nAI: "제목: 미팅 일정 변경 요청의 건\n\n안녕하세요, [거래처 이름] 담당자님,\n\n항상 협조해 주셔서 감사합니다.\n예정되어 있던 다음 주 화요일 미팅 일정을\n부득이한 사정으로 목요일로 변경하고자 연락드립니다..."'
          },
          {
            type: 'header',
            content: '🧩 프롬프트의 구성 요소'
          },
          {
            type: 'paragraph',
            content: '프롬프트는 레고 블록처럼 조립합니다:\n[1. 누가] + [2. 무엇을] + [3. 어떻게] + [4. 어떤 형식으로]'
          },
          {
            type: 'sub-header',
            content: '실제 예시:'
          },
          {
            type: 'code',
            content: '[당신은 친절한 선생님입니다] +\n[파이썬 기초를] +\n[초등학생도 이해하기 쉽게] +\n[그림과 비유를 사용해서 설명해주세요]',
            language: 'text'
          }
        ]
      },
      {
        id: 'step-3',
        title: '3단계: 첫 프롬프트 작성하기',
        description: '실습을 통해 직접 프롬프트를 작성하고 품질을 높이는 연습',
        blocks: [
          {
            type: 'header',
            content: '🎓 실습 1: 나만의 첫 프롬프트 만들기'
          },
          {
            type: 'sub-header',
            content: '주제: 건강한 아침 식사 추천받기'
          },
          {
            type: 'paragraph',
            content: 'Step 1: 기본 버전\n"아침 식사 추천해줘"\n예상 결과: 너무 일반적인 답변 😐'
          },
          {
            type: 'paragraph',
            content: 'Step 2: 조금 개선\n"건강한 아침 식사 메뉴 3가지 추천해줘"\n예상 결과: 좀 더 구체적! 👍'
          },
          {
            type: 'paragraph',
            content: 'Step 3: 훨씬 더 좋게\n"20대 직장인을 위한\n15분 안에 만들 수 있는\n건강한 아침 식사 메뉴 3가지를 추천해줘.\n각 메뉴마다 재료와 간단한 조리법도 포함해줘."\n예상 결과: 완벽한 맞춤 답변! 🎉'
          },
          {
            type: 'header',
            content: '📊 프롬프트 품질 비교표'
          },
          {
            type: 'table',
            content: {
              headers: ['요소', '기본 버전', '개선 버전', '최종 버전'],
              rows: [
                ['명확성', '⭐', '⭐⭐', '⭐⭐⭐⭐⭐'],
                ['구체성', '❌', '△', '✅'],
                ['유용성', '20%', '60%', '95%']
              ]
            }
          },
          {
            type: 'header',
            content: '🎮 즉시 해볼 수 있는 연습'
          },
          {
            type: 'paragraph',
            content: '다음 프롬프트를 복사해서 AI에게 직접 물어보세요:'
          },
          {
            type: 'code',
            content: '안녕! 나는 프롬프트 엔지니어링을 처음 배우는 사람이야.\n나에게 프롬프트가 뭔지\n초등학생도 이해할 수 있게\n일상생활 비유를 들어서 설명해줘.',
            language: 'text'
          },
          {
            type: 'paragraph',
            content: '✏️ 해보셨나요? - [ ] ChatGPT에 물어봄 - [ ] Claude에 물어봄 - [ ] Gemini에 물어봄'
          }
        ]
      },
      {
        id: 'step-4',
        title: '4단계: 프롬프트 개선하기',
        description: '나쁜 프롬프트에서 완벽한 프롬프트로 발전시키는 과정을 배웁니다.',
        blocks: [
          {
            type: 'header',
            content: '🔄 프롬프트 개선 공식'
          },
          {
            type: 'paragraph',
            content: '나쁜 프롬프트 → 구체화 → 컨텍스트 추가 → 형식 지정 → 완벽!'
          },
          {
            type: 'header',
            content: '📝 실전 예제: 이메일 작성'
          },
          {
            type: 'sub-header',
            content: '❌ Level 0 (안 좋음)'
          },
          {
            type: 'code',
            content: '"이메일 써줘"',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '🤔 Level 1 (그냥 그럼)'
          },
          {
            type: 'code',
            content: '"사과하는 이메일 써줘"',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '👍 Level 2 (괜찮음)'
          },
          {
            type: 'code',
            content: '"고객에게 배송 지연 사과 이메일 써줘"',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '🌟 Level 3 (좋음)'
          },
          {
            type: 'code',
            content: '"VIP 고객에게 보낼 배송 지연 사과 이메일을 작성해줘.\n정중하고 진심 어린 톤으로, 보상 방안도 포함해줘."',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '🏆 Level 4 (완벽!)'
          },
          {
            type: 'code',
            content: '"당신은 고급 호텔의 고객 서비스 매니저입니다.\n\nVIP 고객(5년 단골)에게 보낼 배송 지연 사과 이메일을 작성해주세요.\n\n상황:\n- 예정일: 12월 15일\n- 실제 도착 예정: 12월 20일 (5일 지연)\n- 상품: 크리스마스 선물용 명품 가방\n\n요구사항:\n1. 진심 어린 사과\n2. 지연 사유 간단히 설명 (택배사 문제)\n3. 구체적인 보상 제안 (30% 할인 쿠폰)\n4. 격식 있지만 따뜻한 톤\n5. 200-250 단어 분량\n\n형식:\n- 제목 포함\n- 인사말, 본문, 맺음말 구분\n- 고객 이름: [고객명] (나중에 채울 수 있게)"',
            language: 'text'
          },
          {
            type: 'header',
            content: '💡 프롬프트 개선 체크리스트'
          },
          {
            type: 'paragraph',
            content: '프롬프트를 작성하고 이 체크리스트로 점검하세요:'
          },
          {
            type: 'list',
            content: [
              '☐ 누가: AI의 역할을 정했나요? (예: 전문가, 선생님, 친구)',
              '☐ 무엇을: 구체적인 작업을 명시했나요?',
              '☐ 왜: 목적이나 배경을 설명했나요?',
              '☐ 어떻게: 원하는 스타일이나 톤을 지정했나요?',
              '☐ 얼마나: 분량이나 개수를 정했나요?',
              '☐ 어떤 형식: 출력 형태를 지정했나요? (목록, 표, 단락 등)'
            ]
          }
        ]
      },
      {
        id: 'step-5',
        title: '5단계: 다음 학습 단계',
        description: '초보자 과정을 마치고 앞으로 나아갈 길을 안내합니다.',
        blocks: [
          {
            type: 'header',
            content: '🎯 학습 로드맵'
          },
          {
            type: 'code',
            content: '당신은 여기!\n\t↓\n[✅ 완전 초보 가이드] ← 지금 완료!\n\t↓\n[📘 기초편] ← 다음 단계\n\t↓\n[📗 중급편]\n\t↓\n[📙 고급편]\n\t↓\n[🎓 프롬프트 마스터!]',
            language: 'text'
          },
          {
            type: 'header',
            content: '📚 추천 학습 순서'
          },
          {
            type: 'sub-header',
            content: '1주차: 기초 다지기'
          },
          {
            type: 'list',
            content: [
              '☒ 완전 초보 가이드 완료! (지금 여기)',
              '☐ 기초편 - 명확한 지시문',
              '☐ 첫 프롬프트 템플릿 연습'
            ]
          },
          {
            type: 'sub-header',
            content: '2주차: 실전 연습'
          },
          {
            type: 'list',
            content: [
              '☐ 일상생활 프롬프트 50개',
              '☐ 나만의 프롬프트 라이브러리 만들기'
            ]
          },
          {
            type: 'sub-header',
            content: '3-4주차: 심화 학습'
          },
          {
            type: 'list',
            content: [
              '☐ 중급 패턴 학습',
              '☐ 도메인별 실전 예제'
            ]
          },
          {
            type: 'header',
            content: '🎁 초보자를 위한 무료 리소스'
          },
          {
            type: 'paragraph',
            content: '즉시 사용 가능한 프롬프트 템플릿\n📌 복사해서 바로 사용하세요!'
          },
          {
            type: 'sub-header',
            content: '1. 학습용:'
          },
          {
            type: 'code',
            content: '"[주제]를 초보자도 이해할 수 있게\n3가지 핵심 포인트로 설명해줘.\n각 포인트마다 실생활 예시를 들어줘."',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '2. 업무용:'
          },
          {
            type: 'code',
            content: '"[작업명]에 대한 계획을\n단계별로 정리해줘.\n각 단계마다 소요 시간과 필요한 리소스를 명시해줘."',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: '3. 글쓰기용:'
          },
          {
            type: 'code',
            content: '"[주제]에 대한 블로그 글을\n[타겟 독자]를 위해 작성해줘.\n친근하고 이해하기 쉬운 톤으로,\n1000자 정도 분량으로 써줘."',
            language: 'text'
          }
        ]
      },
      {
        id: 'faq',
        title: '자주 묻는 질문 (FAQ)',
        description: '초보자들이 가장 많이 궁금해하는 질문들을 모았습니다.',
        blocks: [
          {
            type: 'header',
            content: '🙋‍♂️ 자주 묻는 질문'
          },
          {
            type: 'sub-header',
            content: 'Q: AI가 이상한 답변을 해요!'
          },
          {
            type: 'paragraph',
            content: 'A: 프롬프트를 더 구체적으로 수정해보세요.'
          },
          {
            type: 'paragraph',
            content: '예시:'
          },
          {
            type: 'code',
            content: '❌ "코드 만들어줘"\n✅ "Python으로 숫자 맞추기 게임 코드를 만들어줘.\n   1-100 사이 숫자를 맞추고, 최대 7번 기회를 주고,\n   힌트(높다/낮다)를 제공하는 코드"',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: 'Q: 한국어로 물어봐야 하나요? 영어로 물어봐야 하나요?'
          },
          {
            type: 'paragraph',
            content: 'A: 섞어 쓰는 것이 가장 좋아요!'
          },
          {
            type: 'paragraph',
            content: '추천 방식:'
          },
          {
            type: 'list',
            content: [
              '설명과 지시: 한국어',
              '기술 용어: 영어'
            ]
          },
          {
            type: 'paragraph',
            content: '예시:'
          },
          {
            type: 'code',
            content: '"Python code를 작성해줘.\n주석은 한국어로 달아줘.\n변수명과 함수명은 영어로 써줘."',
            language: 'text'
          },
          {
            type: 'sub-header',
            content: 'Q: 프롬프트가 너무 길어지는데 괜찮나요?'
          },
          {
            type: 'paragraph',
            content: 'A: 네! 명확한 것이 짧은 것보다 중요합니다.'
          },
          {
            type: 'paragraph',
            content: '팁:'
          },
          {
            type: 'list',
            content: [
              '1. 길더라도 구조화하세요 (번호 매기기, 불릿 포인트)',
              '2. 중요한 정보는 반드시 포함',
              '3. 불필요한 말은 빼기'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'basics',
    title: '기초편',
    icon: PenTool,
    sections: [
      {
        id: 'basics-1',
        title: '1. 프롬프트란 무엇인가?',
        description: '프롬프트 엔지니어링의 핵심 개념과 중요성',
        blocks: [
          { type: 'header', content: '🌟 처음 오신 분들께' },
          { type: 'paragraph', content: '안녕하세요! AI와 대화하는 방법을 처음 배우시는군요! 😊\n걱정하지 마세요! 이 가이드는:\n- 🎯 전문 지식 없이도 이해할 수 있습니다\n- 📝 실제 예제로 바로 연습할 수 있습니다\n- 💡 단계별로 차근차근 배울 수 있습니다' },
          { type: 'header', content: '🚀 5분 만에 시작하기' },
          { type: 'list', content: [
            '1. AI란? ChatGPT, Claude 같은 대화형 인공지능',
            '2. 프롬프트란? AI에게 하는 질문이나 부탁',
            '3. 왜 중요한가? 같은 AI도 질문 방법에 따라 답변 품질이 천차만별!'
          ]},
          { type: 'header', content: '📖 이 가이드를 읽으면' },
          { type: 'list', content: [
            '✅ AI와 자연스럽게 대화할 수 있습니다',
            '✅ 원하는 답변을 정확히 받을 수 있습니다',
            '✅ 업무/학습 효율을 2배 이상 높일 수 있습니다'
          ]},
          { type: 'header', content: '🤔 프롬프트란 쉽게 설명하면?' },
          { type: 'paragraph', content: '프롬프트(Prompt)는 AI에게 하는 질문이나 요청입니다.\n- 친구에게 부탁하듯이 AI에게 말을 거는 것이라고 생각하세요!\n- 더 자세하고 친절하게 설명할수록 AI도 더 정확한 답변을 줍니다.' },
          { type: 'sub-header', content: '일상생활 비유' },
          { type: 'paragraph', content: '❌ 나쁜 예:' },
          { type: 'code', content: '"밥 해줘"\n→ 어떤 밥? 몇 인분? 언제까지?' },
          { type: 'paragraph', content: '✅ 좋은 예:' },
          { type: 'code', content: '"2인분 김치볶음밥을 만들고 싶어.\n집에 김치, 밥, 계란이 있어.\n초보자도 따라할 수 있게 레시피 알려줘"\n→ 명확한 요청!' },
          { type: 'header', content: '🎯 프롬프트의 구성 요소' },
          { type: 'paragraph', content: '프롬프트는 레고 블록처럼 조립할 수 있습니다:\n[누가] + [무엇을] + [어떻게] + [어떤 형식으로]' },
          { type: 'code', content: '예시:\n[당신은 요리 전문가입니다] +\n[김치볶음밥 레시피를] +\n[초보자도 이해하기 쉽게] +\n[단계별로 설명해주세요]' }
        ]
      },
      {
        id: 'basics-2',
        title: '2. 명확한 지시문 작성법',
        description: 'AI가 정확히 이해할 수 있는 명령 내리기',
        blocks: [
          { type: 'sub-header', content: '❌ 나쁜 예시' },
          { type: 'code', content: '"이메일 써줘"' },
          { type: 'sub-header', content: '✅ 좋은 예시' },
          { type: 'code', content: '"신규 고객에게 환영 이메일을 작성해주세요.\n톤은 친근하면서도 전문적으로,\n회사 소개와 첫 구매 10% 할인 쿠폰을 포함해주세요."' },
          { type: 'header', content: '💡 핵심 원칙' },
          { type: 'list', content: [
            '1. 구체적으로 작성: 원하는 것을 명확히 설명',
            '2. 작업 분해: 복잡한 작업은 단계별로 나누기',
            '3. 명확한 동사 사용: “분석하세요”, “요약하세요”, “생성하세요” 등'
          ]},
          { type: 'header', content: '📝 실습 예제' },
          { type: 'sub-header', content: '예제 1: 텍스트 요약' },
          { type: 'paragraph', content: '기본 프롬프트' },
          { type: 'code', content: 'Summarize this text\n이 텍스트를 요약해주세요' },
          { type: 'paragraph', content: '개선된 프롬프트' },
          { type: 'code', content: 'Please summarize the following article in 3 bullet points,\nfocusing on the main findings and their implications.\nEach bullet point should be no more than 2 sentences.\n\n다음 기사를 3개의 불릿 포인트로 요약해주세요.\n주요 발견사항과 그 시사점에 초점을 맞춰주세요.\n각 불릿 포인트는 2문장을 넘지 않도록 해주세요.' },
          { type: 'sub-header', content: '예제 2: 코드 생성' },
          { type: 'paragraph', content: '기본 프롬프트' },
          { type: 'code', content: 'Write a function\n함수를 작성해주세요' },
          { type: 'paragraph', content: '개선된 프롬프트' },
          { type: 'code', content: 'Create a Python function that:\n1. Takes a list of dictionaries as input\n2. Each dictionary has \'name\' and \'age\' keys\n3. Returns a new list sorted by age (ascending)\n4. Handles edge cases (empty list, missing keys)\n5. Include type hints and docstring\n\n다음 조건을 만족하는 Python 함수를 만들어주세요:\n1. 딕셔너리 리스트를 입력으로 받음\n2. 각 딕셔너리는 \'name\'과 \'age\' 키를 가짐\n3. 나이 기준 오름차순으로 정렬된 새 리스트 반환\n4. 엣지 케이스 처리 (빈 리스트, 키 누락)\n5. 타입 힌트와 독스트링 포함' }
        ]
      },
      {
        id: 'basics-3',
        title: '3. 컨텍스트 제공하기',
        description: '배경 정보를 통해 더 나은 답변 유도하기',
        blocks: [
          { type: 'paragraph', content: 'AI는 충분한 배경 정보가 있을 때 더 정확한 답변을 제공합니다.' },
          { type: 'header', content: '🔍 컨텍스트 유형' },
          { type: 'list', content: [
            '1. 도메인 컨텍스트: 업무 분야, 산업 특성',
            '2. 목적 컨텍스트: 결과물의 사용 목적',
            '3. 대상 컨텍스트: 독자나 사용자 정보',
            '4. 제약 컨텍스트: 기술적, 비즈니스적 제한사항'
          ]},
          { type: 'header', content: '📊 예제: 데이터 분석 요청' },
          { type: 'code', content: '# Context / 컨텍스트\n"""\nI\'m a data analyst at an e-commerce company.\nWe\'re preparing a quarterly report for stakeholders.\nOur main KPIs are conversion rate, average order value, and customer retention.\n\n저는 이커머스 회사의 데이터 분석가입니다.\n이해관계자들을 위한 분기 보고서를 준비하고 있습니다.\n주요 KPI는 전환율, 평균 주문 가치, 고객 유지율입니다.\n"""\n\n# Task / 작업\n"""\nAnalyze the following sales data and provide:\n1. Top 3 insights\n2. Trend analysis\n3. Recommendations for next quarter\n\n다음 판매 데이터를 분석하고 제공해주세요:\n1. 상위 3개 인사이트\n2. 트렌드 분석\n3. 다음 분기 권장사항\n"""' }
        ]
      },
      {
        id: 'basics-4',
        title: '4. 출력 형식 지정하기',
        description: '원하는 포맷으로 결과물 받기 (표, 코드, JSON 등)',
        blocks: [
          { type: 'paragraph', content: '원하는 형식을 명확히 지정하면 재작업을 줄일 수 있습니다.' },
          { type: 'header', content: '📋 자주 사용하는 형식' },
          { type: 'sub-header', content: '1. JSON 형식' },
          { type: 'code', content: '// Prompt\n"Return the result in JSON format with the following structure:\n다음 구조의 JSON 형식으로 결과를 반환해주세요:"\n\n{\n  "summary": "brief overview",\n  "key_points": ["point1", "point2"],\n  "confidence_level": "high/medium/low"\n}' },
          { type: 'sub-header', content: '2. 마크다운 테이블' },
          { type: 'code', content: '| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Data 1   | Data 2   | Data 3   |' },
          { type: 'sub-header', content: '3. 번호 목록' },
          { type: 'code', content: '1. First item\n2. Second item\n   a. Sub-item\n   b. Sub-item\n3. Third item' },
          { type: 'header', content: '💻 실전 예제: API 문서 생성' },
          { type: 'code', content: 'Generate API documentation for a user registration endpoint.\n사용자 등록 엔드포인트를 위한 API 문서를 생성해주세요.\n\nFormat the output as follows / 다음 형식으로 출력하세요:\n\n## Endpoint Name\n- **Method**: POST\n- **Path**: /api/v1/users/register\n- **Description**: [Brief description]\n\n### Request Body\n```json\n{\n  "field": "type // description"\n}\nResponse\n·  	Success (201):\n{\n  "field": "value"\n}\n·  	Error (400):\n{\n  "error": "description"\n}\nExample Usage\ncurl -X POST ...' }
        ]
      },
      {
        id: 'basics-5',
        title: '5. 기본 프롬프트 패턴',
        description: '자주 쓰이는 효과적인 프롬프트 구조',
        blocks: [
          { type: 'header', content: '기본 프롬프트 패턴' },
          { type: 'sub-header', content: '1. 🎯 직접 지시 패턴 (Direct Instruction)' },
          { type: 'paragraph', content: '가장 간단한 형태의 프롬프트입니다.' },
          { type: 'code', content: '"Translate this to Korean: [text]"\n"이것을 한국어로 번역하세요: [text]"\n\n"Fix the bugs in this code: [code]"\n"이 코드의 버그를 수정하세요: [code]"' },
          { type: 'sub-header', content: '2. 🔄 입력-출력 패턴 (Input-Output)' },
          { type: 'paragraph', content: '입력과 원하는 출력을 명확히 구분합니다.' },
          { type: 'code', content: 'Input: [your data here] 입력: [데이터]\nTask: [what to do with the input] 작업: [입력으로 수행할 작업]\nOutput format: [desired format] 출력 형식: [원하는 형식]' },
          { type: 'sub-header', content: '3. 📝 템플릿 채우기 패턴 (Fill-in-the-blank)' },
          { type: 'paragraph', content: 'AI가 특정 부분만 채우도록 합니다.' },
          { type: 'code', content: '# Template for bug report\n# 버그 리포트 템플릿\n\n"""\nBug Report:\n- Issue: [AI fills this]\n- Severity: [AI fills this]\n- Steps to reproduce: [AI fills this]\n- Expected behavior: [AI fills this]\n- Actual behavior: [AI fills this]\n- Suggested fix: [AI fills this]\n"""' },
          { type: 'sub-header', content: '4. ✅ 체크리스트 패턴 (Checklist)' },
          { type: 'paragraph', content: '여러 항목을 순차적으로 확인하도록 합니다.' },
          { type: 'code', content: 'Please check the following for this code:\n이 코드에 대해 다음을 확인해주세요:\n\n□ Syntax errors / 구문 오류\n□ Logic errors / 논리 오류\n□ Performance issues / 성능 문제\n□ Security vulnerabilities / 보안 취약점\n□ Code style consistency / 코드 스타일 일관성\n□ Missing error handling / 누락된 에러 처리' }
        ]
      },
      {
        id: 'basics-6',
        title: '6. 실전 연습 및 팁',
        description: '배운 내용을 실습하고 전문가의 팁을 확인하세요.',
        blocks: [
          { type: 'header', content: '🚀 실습 과제' },
          { type: 'paragraph', content: '다음 작업들을 위한 프롬프트를 작성해보세요:' },
          { type: 'sub-header', content: '과제 1: 회의록 요약' },
          { type: 'list', content: [
            '1시간 회의 내용을 5개 핵심 포인트로 요약',
            '액션 아이템 추출',
            '다음 단계 명확히'
          ]},
          { type: 'sub-header', content: '과제 2: 코드 리팩토링' },
          { type: 'list', content: [
            'Python 함수를 더 깨끗하게 개선',
            '성능 최적화',
            '주석 추가'
          ]},
          { type: 'sub-header', content: '과제 3: 콘텐츠 생성' },
          { type: 'list', content: [
            '블로그 포스트 개요 작성',
            'SEO 최적화된 제목 5개 제안',
            '소셜 미디어 요약문 생성'
          ]},
          { type: 'header', content: '🎮 초보자 실습 코너' },
          { type: 'sub-header', content: '🔰 Level 1: 첫 프롬프트 작성하기' },
          { type: 'paragraph', content: '미션: AI에게 자기소개 부탁하기' },
          { type: 'paragraph', content: '시도 1 (기본):' },
          { type: 'code', content: '"자기소개 해줘"' },
          { type: 'paragraph', content: '시도 2 (개선):' },
          { type: 'code', content: '"당신은 AI assistant입니다.\n초보자도 이해하기 쉽게\n당신이 무엇을 도와줄 수 있는지\n3가지로 자기소개 해주세요"' },
          { type: 'paragraph', content: '🎯 연습해보세요! 위 두 프롬프트를 직접 AI에게 입력해보고 차이를 느껴보세요.' },
          
          { type: 'sub-header', content: '🔰 Level 2: 일상 업무 자동화' },
          { type: 'paragraph', content: '미션: 이메일 작성 도움받기' },
          { type: 'paragraph', content: '단계별 프롬프트 작성:' },
          { type: 'list', content: [
            '1. 역할 부여: "당신은 비즈니스 이메일 전문가입니다"',
            '2. 상황 설명: "거래처에 미팅 일정 변경을 요청해야 합니다"',
            '3. 구체적 요청: "정중하고 전문적인 톤으로 작성해주세요"',
            '4. 형식 지정: "제목과 본문을 구분해서 작성해주세요"'
          ]},
          { type: 'paragraph', content: '완성된 프롬프트:' },
          { type: 'code', content: '"당신은 비즈니스 이메일 전문가입니다.\n거래처에 미팅 일정을 다음 주로 변경 요청하는\n정중하고 전문적인 이메일을 작성해주세요.\n제목과 본문을 구분해서 한국어로 작성해주세요."' },

          { type: 'sub-header', content: '🔰 Level 3: 학습 도우미 만들기' },
          { type: 'paragraph', content: '미션: 어려운 개념 쉽게 이해하기' },
          { type: 'paragraph', content: '템플릿:' },
          { type: 'code', content: '"[어려운 개념]을\n[대상]도 이해할 수 있게\n[비유/예시]를 사용해서 설명해주세요"' },
          { type: 'paragraph', content: '실제 예시:' },
          { type: 'code', content: '"블록체인을\n초등학생도 이해할 수 있게\n일상생활 비유를 사용해서 설명해주세요"' },

          { type: 'header', content: '💡 프로 팁' },
          { type: 'sub-header', content: '1. 반복과 개선' },
          { type: 'paragraph', content: '첫 시도에서 완벽한 결과를 기대하지 마세요. 결과를 보고 프롬프트를 개선하세요.' },
          { type: 'sub-header', content: '2. 버전 관리' },
          { type: 'paragraph', content: '효과적인 프롬프트는 저장하고 재사용하세요.' },
          { type: 'code', content: '# prompt_library.py\nPROMPTS = {\n	"code_review": """\n	You are a senior developer reviewing code.\n	Check for: readability, performance, security, best practices.\n	Provide specific suggestions with code examples.\n	""",\n\n	"content_outline": """\n	Create a detailed outline for a blog post about {topic}.\n	Include: hook, main points, examples, conclusion, CTA.\n	Target audience: {audience}\n	"""\n}' },
          { type: 'sub-header', content: '3. 언어 혼용 전략' },
          { type: 'list', content: [
            '기술적 내용: 영어 사용 (더 정확한 결과)',
            '설명과 맥락: 한국어 사용 (이해도 향상)'
          ]},

          { type: 'header', content: '❓ 자주 묻는 질문 (FAQ)' },
          
          { type: 'sub-header', content: 'Q1: AI가 이상한 답변을 할 때는?' },
          { type: 'paragraph', content: 'A: 프롬프트를 더 구체적으로 수정하세요!' },
          { type: 'code', content: '❌ "설명해줘"\n✅ "초보자도 이해할 수 있게 3가지 핵심 포인트로 설명해줘"' },

          { type: 'sub-header', content: 'Q2: 한국어와 영어를 섞어 써도 되나요?' },
          { type: 'paragraph', content: 'A: 네! 오히려 더 좋은 결과를 얻을 수 있습니다.' },
          { type: 'code', content: '"Python code를 작성해주세요.\n주석은 한국어로 달아주세요."' },

          { type: 'sub-header', content: 'Q3: 프롬프트가 길어도 괜찮나요?' },
          { type: 'paragraph', content: 'A: 필요하다면 길게 작성하세요. 명확한 것이 짧은 것보다 중요합니다.' },

          { type: 'sub-header', content: 'Q4: AI가 틀린 정보를 줄 때는?' },
          { type: 'paragraph', content: 'A: 항상 중요한 정보는 검증하세요. AI에게 “출처를 알려줘”라고 요청할 수도 있습니다.' },

          { type: 'sub-header', content: 'Q5: 어떤 AI를 사용해야 하나요?' },
          { type: 'paragraph', content: 'A: - ChatGPT: 범용적, 창의적 작업 - Claude: 긴 문서 작업, 코딩 - Gemini: 최신 정보 검색 필요시' }
        ]
      }
    ]
  },
  {
    id: 'intermediate',
    title: '중급 스킬',
    icon: Zap,
    sections: [
      {
        id: 'inter-1',
        title: '1. 역할 부여 패턴 (Marketing-Oriented Role Prompting)',
        description: 'AI를 가상의 "전문 포지션 인재"로 설정하여 콘텐츠 퀄리티와 전략 밀도를 높이는 기법',
        blocks: [
          { type: 'header', content: '핵심 목적' },
          { type: 'paragraph', content: 'AI를 단순한 도구가 아닌 **가상의 ‘전문 포지션 인재’**로 설정하여\n콘텐츠 퀄리티, 설득력, 전략 밀도를 한 단계 끌어올리는 방식입니다.' },
          { type: 'list', content: [
            '브랜드 톤앤매너 고정',
            '타깃 오디언스 맞춤 메시지 정밀도 향상',
            '캠페인 전략 수준을 ‘주니어 → 시니어급 사고’로 업그레이드'
          ]},
          { type: 'header', content: '마케터용 역할 부여 프롬프트 템플릿' },
          { type: 'sub-header', content: '영어 버전 (글로벌 캠페인용)' },
          { type: 'code', content: 'You are a [ROLE] with [X] years of experience in [MARKET/INDUSTRY].\n\nYou specialize in:\n- [Specialty 1]\n- [Specialty 2]\n- [Specialty 3]\n\nYou are known for:\n- [Strength/Characteristic]\n\nYour communication style is:\n- [Tone + Structure + Intention]\n\nYou always:\n- Think in conversion funnels\n- Prioritize customer psychology\n- Optimize for ROI and performance' },
          { type: 'sub-header', content: '한글 버전 (국내 브랜드 전략용)' },
          { type: 'code', content: '당신은 [산업군/시장]에서 [경력]년의 경험을 가진 [역할]입니다.\n\n전문 분야:\n- [전문 영역 1]\n- [전문 영역 2]\n- [전문 영역 3]\n\n당신의 강점:\n- [특성 1]\n- [특성 2]\n\n커뮤니케이션 스타일:\n- [톤]\n- [구성 방식]\n- [설득 방식]\n\n모든 답변은\n전환 구조, 고객 심리, 매출 관점에서 답변합니다.' },
          { type: 'header', content: '마케터 실전 활용 예제' },
          { type: 'sub-header', content: '예제 1: 퍼포먼스 마케터 페르소나' },
          { type: 'code', content: '당신은 D2C, 뷰티, 이커머스 브랜드 분야에서 \n12년 경력을 가진 “그로스/퍼포먼스 마케터”입니다.\n\n전문 분야:\n- 구매 전환 퍼널 설계\n- 광고 퍼포먼스 최적화 (Meta, Google)\n- 랜딩페이지 전환율 개선 전략\n\n당신은 다음 특징으로 알려져 있습니다:\n- 숫자와 데이터 기반 의사결정\n- 공격적인 A/B 테스트 설계 마인드\n\n커뮤니케이션 스타일:\n- 불필요한 말 없이 명확하게 설명\n- 모든 조언은 매출, 전환율, ROAS 관점에서 제시\n\n작업:\n아래 제품 랜딩페이지를 분석하고 \n구매 전환을 극대화할 수 있도록 개선안을 제시하세요.\n\n[이곳에 랜딩페이지 내용 입력]' },
          { type: 'sub-header', content: '✅ 예제 2: 브랜드 전략가 페르소나' },
          { type: 'code', content: '당신은 프리미엄 라이프스타일 및 뷰티 브랜드를 전문으로 하는\n10년 경력의 “브랜드 전략가”입니다.\n\n전문 분야:\n- 브랜드 포지셔닝 전략\n- 감정 기반 스토리텔링 설계\n- 커뮤니티 중심 브랜드 구축 전략\n\n당신은 다음 역량으로 알려져 있습니다:\n- 고객 충성도를 강력하게 만드는 브랜딩 설계 능력\n- 제품을 단순 상품이 아닌 ‘정체성’으로 만드는 전략\n\n커뮤니케이션 스타일:\n- 감정 공감을 기반으로 하면서도 전략적으로 날카로운 구조\n\n작업:\n고객이 이 브랜드에 ‘소속감’을 느끼도록 만드는\n브랜드 스토리를 설계하세요.\n\n[이곳에 브랜드 정보 입력]' },
          { type: 'tip', content: '실전 활용 팁:\n1. GPT 지침 / 시스템 메시지에 그대로 복붙\n2. 제품/브랜드 정보만 바꿔서 반복 활용\n3. 기업 컨설팅, 캠페인 기획, 상세페이지 기획에 바로 적용 가능' },
          { type: 'header', content: '역할 부여 패턴의 마케팅적 가치' },
          { type: 'list', content: [
            '평범한 카피 → 전환 카피',
            '단순 설명 → 행동 유도 구조',
            '일반 전략 → ROI 기반 의사결정 구조'
          ]},
          { type: 'paragraph', content: 'AI가 “답변 기계”가 아니라\n가상의 시니어 마케터/전문 파트너처럼 사고하도록 만드는 핵심 스위치입니다.' },
          { type: 'header', content: '마케터 관점 베스트 프랙티스' },
          { type: 'sub-header', content: '실전 세팅 포인트' },
          { type: 'list', content: [
            '경력 연차는 반드시 명시 (예: “10년 경력” / “15년 실무 경험”)',
            '성과 중심 표현을 추가 (“conversion-focused”, “ROI-driven”)',
            '타깃 명확화 (대표님인지, 실무자인지, 마케터 팀인지)',
            '제약 조건 명시 (광고 예산, 제작 리소스, 일정의 촉박함)'
          ]},
          { type: 'paragraph', content: '이렇게 설정할수록 AI가 실제 실무자 기준 사고를 하게 됩니다.' }
        ]
      },
      {
        id: 'inter-2',
        title: '2. 단계별 사고 패턴',
        description: '복잡한 문제를 단계별로 논리적으로 해결하도록 유도하는 기법',
        blocks: [
          { type: 'paragraph', content: '복잡한 마케팅·비즈니스 문제를 “한 번에” 풀려고 하면\n늘 감으로 끝나고, 실행은 흐지부지되는 경우가 많습니다.\n\n단계별 사고 패턴은\n문제를 쪼개서 → 순서대로 생각하게 만들고 →\n마지막에는 숫자·행동·결론으로 떨어지게 만드는 프롬프트 구조입니다.' },
          { type: 'header', content: '🔗 기본 구조 (마케터용 템플릿)' },
          { type: 'paragraph', content: '목적:\n애매한 아이디어 나열이 아니라,\n“현재 상황 → 분석 → 인사이트 → 액션 플랜”까지 뽑아내기 위함입니다.' },
          { type: 'code', content: '이 문제를 단계별로 해결해봅시다.\n\nStep 1: [현재 상황 정의 / 문제 명확화]\nStep 2: [데이터·사실 수집 및 정리]\nStep 3: [원인 가설 정리]\nStep 4: [우선순위가 높은 해결 방향 도출]\nFinal Step: [실행 계획 및 기대 성과 정리]\n\n각 단계마다, 다음 단계로 넘어가기 전에\n논리와 숫자를 한 번 더 점검해 주세요.' },
          { type: 'header', content: '🧮 예제 1: 매출 목표 역산하기 (성장률 대신 “마케팅 관점”)' },
          { type: 'paragraph', content: '상황 예시\n\n우리 브랜드의 연 매출이 3년 동안\n2억 → 3.5억으로 성장했습니다.\n향후 5년 안에 연 매출 10억을 만들고 싶습니다.\n\n어떤 마케팅·성장 전략이 필요할까요?\n\n이를 단계별 사고 패턴으로 유도하는 프롬프트는 이렇게 쓸 수 있습니다.' },
          { type: 'code', content: '이 목표를 단계별로 분석하고, 실행 전략을 설계해주세요.\n\nStep 1: 과거 3년간 성장률을 계산하고, \n        성장의 주요 원인을 정리해주세요.\n        - 고객 수 증가 vs 객단가 상승 vs 재구매 증가 등으로 나누어 분석\n\nStep 2: 향후 5년 내 10억 매출을 달성하기 위해\n        필요한 \'대략적인 성장 곡선\'과 핵심 지표(구매자 수, 객단가, 재구매율)를 역산해주세요.\n\nStep 3: 위 지표를 달성하기 위한\n        마케팅 전략을 3가지 축으로 나누어 제안해주세요.\n        - 신규 유입 전략\n        - 객단가/번들 전략\n        - 리텐션/재구매 전략\n\nStep 4: 6개월 단위 실행 로드맵 형태로,\n        가장 임팩트 큰 액션부터 우선순위를 정리해주세요.\n\nFinal Step: 위 전략을 요약해서\n           대표나 경영진에게 보고하는 형식의 한 페이지 요약본으로 정리해주세요.' },
          { type: 'header', content: '🐛 예제 2: 성과가 안 나오는 캠페인 디버깅' },
          { type: 'paragraph', content: '개발 코드를 디버깅하듯이,\n광고·캠페인도 디버깅 구조로 접근할 수 있습니다.\n\n상황 예시\n\n특정 캠페인의 클릭수는 잘 나오는데,\n장바구니·구매 전환이 거의 없습니다.\n어디서 문제가 발생하는지 단계별로 진단해 주세요.\n\n프롬프트를 이렇게 설계합니다.' },
          { type: 'code', content: '이 캠페인의 문제를 \'디버깅\'하듯이 단계별로 진단해주세요.\n\nStep 1: 캠페인의 목표와 핵심 KPI를 먼저 정의해주세요.\n        - 이 캠페인의 최종 목표는 무엇인지\n        - 현재 어떤 지표들이 잘 나오고, 어떤 지표들이 막혀 있는지 정리\n\nStep 2: 퍼널 단계별로 성과를 분해해서 살펴봐주세요.\n        - 노출 → 클릭 → 랜딩페이지 체류 → 장바구니 → 구매\n        - 각 단계에서 이탈률이 특히 높은 구간을 찾기\n\nStep 3: 잠재적인 문제 요인을 카테고리별로 정리해주세요.\n        - 타깃 설정 문제 (오디언스 미스매치)\n        - 크리에이티브/카피 문제 (메시지-오퍼 미스매치)\n        - 랜딩페이지 문제 (로딩 속도, 신뢰도, CTA, 정보 구조 등)\n        - 오퍼/가격/혜택 경쟁력 문제\n\nStep 4: 가장 영향력이 클 것 같은 원인 Top 3를 선정하고,\n        각각에 대해 구체적인 A/B 테스트 아이디어를 제안해주세요.\n        - 어떤 요소를, 어떻게 바꾸고, 무엇을 측정할지까지 포함\n\nFinal Step: 2주 이내에 실행 가능한\n           \'미니 실험 플랜\'을 만들어주세요.\n           - 실행 순서\n           - 필요한 리소스\n           - 기대 성과 및 판단 기준' },
          { type: 'header', content: '정리' },
          { type: 'paragraph', content: '2. 단계별 사고 패턴은\n“마케팅 문제를 쪼개서 실행 가능한 답까지 끌고 가는 틀”입니다.\n\n마케터 입장에선\n아이디어 브레인스토밍 → 액션 플랜/보고서 수준으로 끌어올리는 핵심 장치입니다.\n\n“Step 1~Final Step” 템플릿을\n매출 목표, 캠페인 진단, 고객 분석, 상세페이지 개선 등 어디든 그대로 이식해서 쓰실 수 있습니다.' }
        ]
      },
      {
        id: 'inter-3',
        title: '3. 구분자 패턴',
        description: '입력 데이터를 명확히 구분하여 AI의 혼란을 방지하는 기법',
        blocks: [
          { type: 'header', content: '핵심 목적' },
          { type: 'paragraph', content: '마케팅에서 AI를 쓰다 보면 가장 많이 발생하는 문제가 이것입니다.\n\n지시와 데이터가 섞여 AI가 엉뚱한 해석을 함\n전략 지시 → 경쟁사 정보 → 고객 데이터 → 요구 출력형식이 뒤섞임\n결과물이 매번 다르게 나와 자동화가 어려움\n\n구분자 패턴은 이를 해결합니다.\n\n👉 AI에게 “이건 명령”, “이건 데이터”, “이건 출력 형식”이라고 경계를 명확히 선언하는 구조입니다.' },
          { type: 'sub-header', content: '🔲 마케터용 기본 구분자 구조 템플릿' },
          { type: 'code', content: '✅ 가장 추천하는 마케팅 실전형 구조\n### ROLE ###\n당신의 역할 정의\n\n### OBJECTIVE ###\n이 작업의 목표\n\n### INSTRUCTIONS ###\n실행 규칙\n\n### INPUT DATA ###\n분석해야 할 데이터\n\n### CONSTRAINTS ###\n제약 조건\n\n### OUTPUT FORMAT ###\n출력 형식 규칙' },
          { type: 'paragraph', content: '이 구조를 사용하면 AI가 감정적으로 흔들리지 않고 ‘기획자 모드’로 일관 유지합니다.' },
          { type: 'sub-header', content: '🔲 마케터용 커스텀 구분자 (추천 세트)' },
          { type: 'code', content: '① 전략용 프롬프트 구조\n=== START ROLE ===\n역할 설명\n=== END ROLE ===\n\n=== START TASK ===\n작업 목표\n=== END TASK ===\n\n=== START DATA ===\n제품/시장/고객 데이터\n=== END DATA ===\n\n=== START OUTPUT ===\n원하는 출력 형태\n=== END OUTPUT ===\n\n② 광고 캠페인/콘텐츠 기획 특화 버전\n<persona>\nAI 역할\n</persona>\n\n<goal>\n캠페인 목적\n</goal>\n\n<input_data>\n제품, 타깃, 시장 정보\n</input_data>\n\n<rules>\n톤앤매너, 제약 조건\n</rules>\n\n<output_format>\n결과물 구조\n</output_format>' },
          { type: 'header', content: '📊 실전 마케터 활용 예제 (리뷰 분석 시나리오)' },
          { type: 'code', content: '<context>\n당신은 SaaS / 화장품 / 이커머스 마케팅 전략가입니다.\n당신의 목표는 고객 리뷰에서\n이탈 원인과 구매 유도 포인트를 찾아내는 것입니다.\n</context>\n\n<instructions>\n다음 순서로 분석하세요.\n\n1. 리뷰를 유형별로 분류\n2. 각 리뷰에 감정 강도 점수 부여 (1-5)\n3. 반복되는 핵심 키워드 추출\n4. 매출에 가장 큰 영향을 주는 항목을 우선순위화\n</instructions>\n\n<feedback_data>\nCustomer 1: "The dashboard is confusing. Takes too long to find metrics."\nCustomer 2: "Love the automation features! Wish it had Slack integration."\nCustomer 3: "Pricing is too high for small teams."\nCustomer 4: "Dashboard needs better visualization options."\nCustomer 5: "Please add Slack notifications!"\n</feedback_data>\n\n<output_format>\n{\n  "main_pain_points": [],\n  "quick_wins": [],\n  "high_impact_actions": []\n}\n</output_format>\n\n<language>\n모든 결과는 한국어로 표기하되, 전문 용어는 영어로 유지\n</language>' },
          { type: 'header', content: '🚀 마케터 관점 핵심 포인트' },
          { type: 'list', content: [
            '✅ 브랜드 컨설팅 보고서 품질이 일정해짐',
            '✅ 기업별 AI 자동화 시스템 구축이 쉬워짐',
            '✅ 결과물이 ‘감’이 아니라 템플릿화 가능해짐',
            '특히 후기 데이터 분석, 고객 세분화, 경쟁사 분석, 정부지원 과제 보고서 자동화에 강력합니다.'
          ]},
          { type: 'tip', content: '실전 베스트 프랙티스 (마케터용):\n반드시 포함하면 좋은 구분 블록:\n- ROLE: AI 사고 방향 고정\n- OBJECTIVE: 방향 이탈 방지\n- INPUT DATA: 데이터와 지시 분리\n- OUTPUT FORMAT: 결과물 표준화' }
        ]
      },
      {
        id: 'inter-4',
        title: '4. 제약 조건 설정',
        description: 'AI가 하지 말아야 할 것과 지켜야 할 규칙 설정하기',
        blocks: [
          { type: 'header', content: '제약 조건이란?' },
          { type: 'paragraph', content: '마케터 관점에서 제약 조건은 곧 브랜드 통제권 + 결과물 품질 관리 장치입니다.\n아무 때나 훈수 두는 ‘지식백과형 답변’ ❌\n브랜드 톤, 타깃, 목표를 반영한 ‘전략 산출물’ ✅\n를 가르는 기준이 바로 제약 조건입니다.' },
          { type: 'sub-header', content: '🚫 부정 제약 (Negative Constraints)' },
          { type: 'paragraph', content: '“이건 절대 하지 마라”를 미리 못 박아두는 장치' },
          { type: 'code', content: '하지 마세요:\n- 타깃 고객을 특정하지 않은 일반론적 마케팅 조언\n- 브랜드에서 사용하지 않는 말투, 반말, 과장된 자극적 표현\n- \'열심히\', \'성공\', \'브랜딩이 중요합니다\' 같은 추상적인 문장 남발\n- 내가 제공하지 않은 데이터나 경쟁사 정보를 마음대로 추측해서 인용\n- 법적·광고 심의에 문제가 될 만한 표현(효능 과장, 의학적 표현 등)\n- 1,000자 이상 장황한 설명 (핵심이 흐려지는 분량)\n- 액션 플랜 없이 개념 설명만 하고 끝내기' },
          { type: 'sub-header', content: '✅ 긍정 제약 (Positive Constraints)' },
          { type: 'paragraph', content: '“이 건 꼭 지켜라”를 명령하는 장치' },
          { type: 'code', content: '반드시:\n- 특정 타깃을 전제로 작성할 것\n  (예: 30대 워킹맘, 민감성 피부 직장인, 영어 울렁증 직장인 등)\n- 브랜드의 톤앤매너를 반영할 것\n  (예: 담백하고 논리적인 톤, 과장 없는 프리미엄 톤 등)\n- 모든 제안은 \'매출/전환/재구매\' 중 최소 1개 이상과 연결해서 설명할 것\n- 실행 가능한 액션 아이템으로 마무리할 것\n  (예: \'광고 세팅 시 이렇게 집행\', \'상세페이지 섹션 이렇게 구성\')\n- 내가 제공한 데이터, 인사이트를 우선적으로 활용할 것\n- 글의 구조를 명확히 나눌 것\n  (상황 분석 → 문제 정의 → 전략 제안 → 우선순위 → 액션 플랜)\n- 분량은 700~1,200자 사이로 유지하고, 불필요한 수식어는 줄일 것' },
          { type: 'header', content: '[작업 요청] 예시' },
          { type: 'code', content: '다음 조건에 맞춰 ‘신제품 론칭 캠페인 전략’을 설계해주세요.\n\n[제품 정보]\n- 카테고리: 저자극 클렌저\n- 타깃: 20~30대 민감성 피부 여성\n- 판매 채널: 자사몰 + 인스타그램\n- 목표: 론칭 첫 달 매출 5,000만원\n\n[✅ 필수 조건]\n반드시 포함해야 할 요소:\n- 메인 캠페인 콘셉트 1안 이상\n- 핵심 메시지(메인 카피 + 서브 카피)\n- 퍼널 구조 설계\n  (인지 → 관심 → 탐색 → 전환 → 재참여)\n- 인스타그램 중심 콘텐츠 전략\n  (릴스, 스토리, 피드 포스트 최소 3종)\n- 전환 유도를 위한 오퍼 설계\n  (체험, 샘플, 한정 프로모션 등)\n- KPI 지표 제시\n  (도달, 클릭, 전환율, 구매 전환 목표 수치)\n\n[❌ 금지 조건]\n절대 하지 말아야 할 것:\n- “바를수록 좋아집니다”, “기적의”, “완벽한” 등 과장 표현\n- 의학적 표현, 치료 효과 암시\n- 막연한 브랜딩 이야기만 하고\n  실제 실행 구조 없이 끝내는 방식\n- 타깃이 불분명한 ‘모든 사람 대상’ 전략\n\n[⚠️ 고려해야 할 사항]\n- 광고 심의 리스크 최소화\n- 예산 1,000만원 이내 집행\n- 내부 인력 2명 기준 운영 가능해야 함\n- 콘텐츠 제작은 스마트폰 촬영 기반으로 설계\n\n[💡 있으면 좋은 요소]\n가능하다면 포함:\n- 바이럴 확산을 위한 참여형 구조\n  (챌린지, 공유 이벤트 등)\n- 인플루언서 협업 구조\n- 론칭 후 2차 판매로 이어지는 리텐션 장치 설계\n\n[출력 조건]\n아래 포맷을 반드시 지켜서 출력하세요:\n\n## 1. 캠페인 콘셉트\n## 2. 퍼널 전략 구조\n## 3. 콘텐츠 기획안\n## 4. 전환 오퍼 설계\n## 5. KPI 목표\n## 6. 실행 체크리스트' }
        ]
      },
      {
        id: 'inter-5',
        title: '5. 출력 제어 패턴',
        description: '답변의 길이, 포맷, 스타일을 정밀하게 제어하기',
        blocks: [
          { type: 'header', content: '출력 제어란?' },
          { type: 'paragraph', content: '답변의 길이, 포맷, 스타일을 내가 원하는 틀 안에 가두는 기술\n“매번 말투가 바뀌는 AI”를 “항상 같은 형식과 퀄리티로 결과물을 뽑는 비서”로 만드는 스위치입니다.' },
          { type: 'sub-header', content: '📋 1) 구조화된 출력 템플릿 (마케터 버전 예시)' },
          { type: 'code', content: '예시: “마케팅 전략 리뷰 리포트” 출력 템플릿\n아래 형식을 반드시 그대로 지켜서 출력하세요:\n\n## 1. Summary (요약)\n- 현재 상황 한 줄 요약:\n- 가장 큰 문제 1줄 요약:\n- 가장 먼저 해야 할 액션 1줄 요약:\n\n## 2. KPI 스냅샷\n| 구분           | 현재 값 | 목표 값 | 주석 |\n|----------------|---------|---------|------|\n| 매출           |         |         |      |\n| 전환율(CVR)    |         |         |      |\n| CAC            |         |         |      |\n| 재구매율       |         |         |      |\n\n## 3. Funnel 진단\n| 단계                | 지표/상태                         | 문제점 요약                     |\n|---------------------|-----------------------------------|---------------------------------|\n| 인지도 (Reach)      |                                   |                                 |\n| 유입 (Click/Visit)  |                                   |                                 |\n| 전환 (Purchase)     |                                   |                                 |\n| 유지 (Retention)    |                                   |                                 |\n\n## 4. 핵심 인사이트 (Top 3)\n1. [인사이트 1]\n2. [인사이트 2]\n3. [인사이트 3]\n\n## 5. 액션 플랜 (우선순위 순)\n| 우선순위 | 액션 항목                      | 담당/역할     | 예상 임팩트 | 실행 기간 |\n|----------|--------------------------------|--------------|-------------|-----------|\n| High     |                                |              |             |           |\n| Medium   |                                |              |             |           |\n| Low      |                                |              |             |           |\n\n## 6. 메시지/크리에이티브 방향 제안\n- 핵심 메시지 컨셉:\n- Hook 문장 예시 2~3개:\n- 권장 톤앤매너:\n\n## 7. Metrics (JSON 형식)\n{\n  "current_revenue": 0,\n  "target_revenue": 0,\n  "current_cvr": 0,\n  "target_cvr": 0,\n  "estimated_timeline_weeks": 0\n}' },
          { type: 'code', content: '예시: “상세페이지 진단 리포트” 템플릿\n아래 형식으로만 답변하세요:\n\n## 1. 한 줄 평가\n- 이 상세페이지의 한 줄 요약 평가:\n\n## 2. 구조 진단\n| 섹션          | 유무 | 평가 | 코멘트 |\n|---------------|------|------|--------|\n| Hook 섹션     |      |      |        |\n| 공감/문제 제기 |      |      |        |\n| 솔루션 제시   |      |      |        |\n| 제품 USP      |      |      |        |\n| 사회적 증거(후기 등) | |    |        |\n| 혜택/구성 안내 |      |      |        |\n| CTA 섹션      |      |      |        |\n\n## 3. 강점 (Strengths)\n- 강점 1\n- 강점 2\n\n## 4. 개선 포인트 (Areas for Improvement)\n- 개선 포인트 1 (구체적인 수정 제안 포함)\n- 개선 포인트 2\n\n## 5. 우선순위 액션 3가지\n1. [High] 액션 내용\n2. [Medium] 액션 내용\n3. [Low] 액션 내용' },
          { type: 'sub-header', content: '🔄 2) 조건부 출력 패턴' },
          { type: 'code', content: '사용자의 요청을 분석하고 그에 따라 아래 조건에 맞춰 응답하세요:\n\nIF 요청이 "광고 성과 분석"에 관한 경우:\n  - 현재 성과를 KPI 표로 요약\n  - 퍼널 단계별 문제 구간 식별\n  - 원인에 대한 가설 3가지 제시\n  - 캠페인/세그먼트 단위의 개선 액션 제안\n  - 테스트해야 할 A/B 실험 3가지 제안\n\nELIF 요청이 "상세페이지/랜딩페이지 개선"에 관한 경우:\n  - 페이지를 5~7개 섹션으로 나누어 구조 분석\n  - Hook, 공감, 솔루션, 신뢰, CTA 관점에서 평가\n  - 부족한 요소를 구체적으로 지적\n  - 섹션별로 대체 카피/구조 제안\n  - 우선 수정해야 할 Top 3만 명시\n\nELIF 요청이 "콘텐츠/캠페인 아이디어"에 관한 경우:\n  - 타깃과 목적을 먼저 재정의\n  - 메인 콘셉트 1~2개 제안\n  - 구체적인 콘텐츠 기획안(예: 인스타 7일 플랜, 릴스 5편 기획 등)\n  - 각 콘텐츠별 Hook + 주제 + CTA 제안\n\nELSE:\n  - 요청이 불명확한 부분에 대해 2~3가지 명확한 질문\n  - 그 전제에서 선택 가능한 방향성 옵션 제안' },
          { type: 'header', content: '🎯 중급 패턴 조합 예제' },
          { type: 'paragraph', content: '주제: 신제품 상세페이지 기획 자동 프롬프트\n이 예제는 역할 부여 + 구분자 + 제약 조건 + 출력 제어를 한 번에 결합한 구조입니다.' },
          { type: 'code', content: '<role>\n당신은 10년 경력의 이커머스 전문 카피라이터이자\n퍼포먼스 마케터입니다.\n주 업무는 전환율 높은 상세페이지 기획과\n구매 심리를 설계하는 것입니다.\n</role>\n\n<context>\n아래 제품에 대한 ‘전환 최적화형 상세페이지 구조’를 만들고자 합니다.\n</context>\n\n<product_info>\n- 제품 카테고리: 약산성 클렌저\n- 타깃 고객: 20~30대 민감성 피부 여성\n- 판매 채널: 네이버 스마트스토어\n- 경쟁 환경: 저가 제품이 많고, 차별화 어려움\n</product_info>\n\n<task>\n이 제품의 구매 전환율을 높일 수 있도록\n상세페이지의 “전체 구조 + 섹션별 메시지 설계”를 진행하세요.\n</task>\n\n<constraints>\n✅ MUST:\n- 첫 화면에서 시선 끄는 Hook 설계\n- 공감 → 문제 제기 → 해결책 제시 구조 유지\n- 제품 USP를 최소 3가지 이상 명확히 표현\n- 불안 해소를 위한 신뢰 요소 삽입\n  (성분, 테스트, 후기, 보증 등)\n- 구매 욕구를 자극하는 오퍼 설계\n\n❌ MUST NOT:\n- 의학적 표현 사용\n- 과장된 효과 표현\n- “이 제품 하나면 끝” 식의 허위 과장 표현\n- 막연한 감성 브랜딩 이야기만 반복\n\n⚠️ CONSIDER:\n- 모바일 화면 기준 구성\n- 빠른 스크롤 환경에서 핵심만 보이게 설계\n- 자사몰이 아닌 마켓 플랫폼 UI 제약\n\n💡 OPTIONAL:\n- 경쟁 제품과 차이를 보여주는 비교 영역\n- 구매를 미루지 않게 만드는 행동 유도 장치\n</constraints>\n\n<output_format>\n아래 형식으로만 출력하세요:\n\n## 1. 상세페이지 전체 흐름 구조\n\n## 2. 섹션별 기획안\n| 섹션 | 목적 | 핵심 메시지 | 비주얼 방향 |\n|------|------|------------|-------------|\n\n## 3. Important Hooks (상단 카피 후보 3개)\n\n## 4. 설득 요소 설계\n- 사회적 증거(후기, 인증 등)\n- 불안 해소 장치\n- 혜택 구조\n\n## 5. 전환 강화 장치\n- CTA 구조\n- 한정 요소 설계\n\n## 6. 즉시 실행 체크리스트\n☐ 이미지 제작\n☐ 카피 작성\n☐ 경쟁사 비교표 제작\n☐ 후기 수집 설계\n</output_format>' },
          { type: 'tip', content: '이 구조를 쓰면 AI는 자동으로: ⛔ 엉뚱한 이야기 제거, ✅ 항상 “전환 중심 사고” 유지, ✅ 결과물을 바로 실무에 쓸 수 있는 포맷으로 고정 출력합니다.' }
        ]
      }
    ]
  },
  {
    id: 'advanced',
    title: '고급 테크닉',
    icon: Brain,
    sections: [
      {
        id: 'adv-1',
        title: '1. 퓨샷 학습',
        description: '예시를 제공하여 모델이 원하는 패턴을 빠르게 학습하도록 돕는 기법',
        blocks: [
          { type: 'header', content: '퓨샷 학습이란?' },
          { type: 'paragraph', content: 'AI에게 “비슷한 예시 몇 개”를 먼저 보여주고,\n그 스타일·패턴·결과 구조를 학습시켜 다음 작업도 동일한 방식으로 처리하게 만드는 기법입니다.' },
          { type: 'sub-header', content: '👉 쉽게 말하면' },
          { type: 'paragraph', content: '"이렇게, 이렇게 작업하니까 → 너도 앞으로는 이렇게 해" 라고 AI를 교육하는 방식' },
          { type: 'header', content: '실전 예제' },
          { type: 'code', content: 'Here are some marketing examples:\n\nExample 1:\nInput: 건조한 피부용 수분크림\nOutput: 하루 종일 촉촉함이 유지되는 고보습 케어\n\nExample 2:\nInput: 민감성 피부용 클렌징폼\nOutput: 순하게 지우고, 피부 장벽은 지키는 약산성 클렌저\n\nExample 3:\nInput: 올인원 남성 에센스\nOutput: 면도 후까지 한번에 케어하는 올인원 솔루션\n\nNow apply the same pattern:\nInput: 여드름 피부용 토너\nOutput:' },
          { type: 'paragraph', content: '이렇게 입력하면 AI는\n“제품 특징 → 한 문장 광고 카피” 패턴을 학습하고 같은 방식으로 결과를 만들어냅니다.' },
          { type: 'header', content: '🔬 고급 퓨샷 예제 — 광고 문구 ‘문제점 개선’ 학습' },
          { type: 'paragraph', content: '마케팅 실무에서 자주 사용하는 “카피 개선 AI” 구조로 재구성' },
          { type: 'code', content: '예제1\n\nInput Copy:\n우리 제품은 정말 좋고 효과가 뛰어납니다.\n\nReview Output:\n⚠️ 문제점: 표현이 너무 추상적임\n개선 방향: 구체적인 효과 추가\n개선 카피: 단 3일 만에 피부결이 눈에 띄게 부드러워집니다\n\n예제2\n\nInput Copy:\n이 로션은 피부에 정말 잘 발립니다.\n\nReview Output:\n⚠️ 문제점: 차별화 포인트 없음\n개선 방향: 성분과 타깃 강조\n개선 카피: 카모마일 꽃수 57%로 민감한 피부까지 편안하게\n\n예제3\n\nInput Copy:\n이 제품은 보습력이 좋습니다.\n\nReview Output:\n⚠️ 문제점: 숫자 근거 없음\n개선 방향: 수치 기반 표현 적용\n개선 카피: 보습 지속력 최대 48시간 유지' },
          { type: 'header', content: '동적 퓨샷 선택 (Dynamic Few-shot Selection)' },
          { type: 'paragraph', content: '작업 유형에 따라 AI가 자동으로 적절한 예시를 골라 적용하게 만드는 구조' },
          { type: 'code', content: '"""\nDynamic Few-shot for Marketing Tasks\n작업 유형에 따라 예제를 자동 선택합니다.\n"""\n\ndef create_marketing_prompt(task_type, user_input):\n\n    examples = {\n        "ad_copy": [\n            ("수분크림", "첫 사용부터 느껴지는 깊은 보습감"),\n            ("톤업 선크림", "바르는 순간 화사해지는 자연스러운 톤보정"),\n            ("클렌징오일", "메이크업까지 한번에 녹여내는 딥클렌징")\n        ],\n\n        "review_summary": [\n            ("배송이 빠르고 제품이 좋아요", "배송 속도와 제품 만족도가 높음"),\n            ("피부가 따가웠어요", "민감 피부 사용자에게 자극 우려 있음"),\n            ("재구매 의사 있습니다", "재구매 의향이 강함")\n        ],\n\n        "detail_page_hook": [\n            ("피부가 자주 당겨요", "세안 후에도 24시간 촉촉함 유지"),\n            ("화장이 잘 안 먹어요", "베이스 밀착력을 높여주는 스킨케어"),\n            ("각질이 자주 올라와요", "저자극 각질 케어로 매끈한 피부결 완성")\n        ]\n    }\n\n    selected_examples = examples.get(task_type, [])\n\n    prompt = f"Task Type: {task_type}\\n\\n"\n\n    for input_ex, output_ex in selected_examples:\n        prompt += f"Input: {input_ex}\\nOutput: {output_ex}\\n\\n"\n\n    prompt += f"Input: {user_input}\\nOutput:"\n\n    return prompt', language: 'python' }
        ]
      },
      {
        id: 'adv-2',
        title: '2. 제로샷 체인 추론',
        description: '예시 없이도 "단계별로 생각해보자"라는 문구 하나로 추론 능력을 극대화하는 기법',
        blocks: [
          { type: 'paragraph', content: '복잡한 문제를 풀 때 예시를 주기 어렵다면? 마법의 문구를 추가하세요.' },
          { type: 'header', content: '✨ 마법의 문구' },
          { type: 'code', content: '"단계별로 생각해보자 (Let\'s think step by step)"' },
          { type: 'paragraph', content: '이 간단한 문장을 프롬프트 끝에 추가하는 것만으로도, 모델은 바로 답을 내놓는 대신 논리적인 사고 과정을 거치게 됩니다.' },
          { type: 'header', content: '비교 예시' },
          { type: 'sub-header', content: '❌ 일반 프롬프트' },
          { type: 'code', content: 'Q: 사과가 5개 있는데, 2개를 먹고 3개를 더 샀어. 그리고 친구한테 1개를 줬어. 지금 몇 개야?\nA: 5개.' },
          { type: 'paragraph', content: '(모델이 중간 계산을 건너뛰고 틀릴 확률이 높음)' },
          { type: 'sub-header', content: '✅ 제로샷 CoT 프롬프트' },
          { type: 'code', content: 'Q: 사과가 5개 있는데, 2개를 먹고 3개를 더 샀어. 그리고 친구한테 1개를 줬어. 지금 몇 개야?\n단계별로 생각해보자.\n\nA: \n1. 처음에 사과가 5개 있었음.\n2. 2개를 먹었으니 5 - 2 = 3개.\n3. 3개를 더 샀으니 3 + 3 = 6개.\n4. 친구에게 1개를 줬으니 6 - 1 = 5개.\n정답은 5개입니다.' },
          { type: 'header', content: '💡 고급 Zero-shot CoT 변형 — 마케팅 예산·성과 최적화' },
          { type: 'code', content: 'Problem:\nA D2C skincare brand needs to increase revenue by 20% \nwithout increasing total ad spend. \nThey currently have $1M annual ad budget, \n10 marketing channels, and 50,000 monthly website visitors.\n\n문제:\n한 D2C 스킨케어 브랜드가 광고 집행 비용을 늘리지 않고\n매출을 20% 증가시켜야 합니다.\n현재 연간 광고 예산은 100만 달러,\n마케팅 채널은 10개,\n월간 웹사이트 방문자는 50,000명입니다.\n\nLet\'s approach this systematically:\n체계적으로 접근해봅시다:\n\n1. First, let\'s break down the current performance funnel\n   먼저 현재 퍼널 구조와 전환 성과를 분석해봅시다\n   (노출 → 클릭 → 장바구니 → 구매까지 각 단계 전환률)\n\n2. Next, let\'s identify the highest-leverage improvement areas\n   다음으로, 적은 변화로 큰 효과를 낼 수 있는 레버리지를 찾습니다\n   (예: 랜딩페이지 전환율, 장바구니 이탈, 재구매율 등)\n\n3. Then, let\'s estimate the revenue impact of each optimization idea\n   그런 다음, 각 개선 아이디어가 매출에 미치는 영향을 추정해봅시다\n   (전환율 1%p 상승 시 매출 변화 등 시뮬레이션)\n\n4. Finally, let\'s create a prioritized action plan\n   마지막으로, 우선순위가 매겨진 실행 계획을 만듭니다\n   (단기 실험 → 검증 → 확장 순으로 로드맵화)\n\nThink carefully about trade-offs and dependencies at each step.\n각 단계에서 트레이드오프와 채널·조직 간 의존성을 신중히 생각하세요.\n(예: 신규 채널 테스트 vs. 기존 채널 최적화, 브랜드 일관성 vs. 공격적인 퍼포먼스 크리에이티브)' },
          { type: 'header', content: '🔄 강화된 CoT 프롬프트 — 풀퍼널 마케팅 시스템 설계' },
          { type: 'code', content: 'Complex Marketing System Problem:\n복잡한 마케팅 시스템 문제:\n\nDesign an always-on performance marketing engine that can \nacquire 10,000 new paying customers per month\nwith stable CAC and consistent ROAS across channels.\n\n매달 10,000명의 신규 유료 고객을 확보하면서,\n채널 전반에서 CAC(고객 획득 비용)를 안정적으로 유지하고\nROAS(광고 수익률)의 일관성을 확보하는\n상시 가동 퍼포먼스 마케팅 엔진을 설계하세요.\n\nBefore answering:\n답변하기 전에:\n\n1. State your assumptions\n   전제 조건을 명확히 적으세요\n   (예: 객단가, 마진 구조, 주요 채널, 타깃 페르소나 등)\n\n2. Consider edge cases\n   엣지 케이스를 고려하세요\n   (예: 특정 채널의 광고 계정 정지, 급격한 CPM 상승, 시즌성 변화 등)\n\n3. Think about scalability\n   확장 가능성을 생각하세요\n   (예: 예산 2배/3배 증액 시 퍼포먼스 유지 전략, 크리에이티브 제작 자동화 등)\n\n4. Evaluate trade-offs\n   트레이드오프를 평가하세요\n   (예: 볼륨 vs. 효율, 브랜드 자산 vs. 단기 전환, 채널 다각화 vs. 집중)\n\nLet\'s work through this step-by-step, showing all reasoning:\n모든 추론 과정을 드러내며 단계별로 작업해봅시다:\n\nStep 1: Define target metrics and constraints precisely\n        (CAC, ROAS, LTV, 리텐션, 예산 한도 등 명확히 정의)\n1단계: 목표 지표와 제약 조건을 정확히 정의합니다\n\nStep 2: Map the end-to-end customer journey and funnel\n        (고객 여정: 인지 → 흥미 → 비교 → 구매 → 재구매 → 추천)\n2단계: 전체 고객 여정과 마케팅 퍼널을 설계합니다\n\nStep 3: Design the channel architecture and budget allocation logic\n        (채널별 역할, 상단/중단/하단 퍼널 분리, 예산 배분 규칙)\n3단계: 채널 구조와 예산 배분 로직을 설계합니다\n\nStep 4: Address failure scenarios and measurement issues\n        (트래킹 이슈, 애트리뷰션 문제, iOS 제한, 데이터 손실 시 대안 등)\n4단계: 실패 시나리오와 측정 문제를 해결하는 방안을 제시합니다\n\nStep 5: Optimize for learning speed and performance stability\n        (실험 설계, 테스트 사이클, 크리에이티브 테스트, 자동화 룰)\n5단계: 학습 속도와 퍼포먼스 안정성을 동시에 높이는 최적화 전략을 제안합니다' }
        ]
      },
      {
        id: 'adv-3',
        title: '3. 자기 일관성',
        description: '여러 전략적 사고 경로를 거쳐 가장 안정적인 의사결정을 도출하는 기법',
        blocks: [
          { type: 'header', content: '자기 일관성(Self-Consistency)이란?' },
          { type: 'paragraph', content: '여러 가지 질문을 동시에 생성한 뒤, 가장 공통적으로 ‘성과 가능성’이 높게 나타나는 안을 최종 채택하는 기법입니다.' },
          { type: 'header', content: '핵심 목적' },
          { type: 'paragraph', content: '“한 번의 답”이 아니라, 여러 전략적 사고 경로를 거친 ‘가장 안정적인 의사결정’을 도출하는 것이 목표입니다.' },
          { type: 'header', content: '🔀 다중 경로 추론 — 마케팅 버전 예시' },
          { type: 'code', content: 'Solve this problem using 3 different approaches,\nthen synthesize the best marketing solution:\n\nProblem:\nWebsite conversion rate dropped from 3% to 1%.\nHow can we recover performance?\n\n문제:\n웹사이트 전환율이 3% → 1%로 급락했습니다.\n성과를 회복하는 방법은 무엇인가요?\n\nApproach 1: Performance marketing perspective\n(퍼포먼스 마케팅 관점)\n- Analyze traffic quality by channel\n- Check ad creative fatigue\n- Optimize landing page CTA\n- Run A/B tests on headlines\n\nApproach 2: UX / Customer experience perspective\n(고객 경험 관점)\n- Improve page loading speed\n- Simplify checkout flow\n- Reduce form fields\n- Add trust elements (reviews, badges)\n\nApproach 3: Brand / Messaging perspective\n(브랜드 메시지 관점)\n- Clarify product value proposition\n- Align ad message with landing content\n- Add social proof storytelling\n- Improve emotional hooks\n\nNow, compare all three approaches:\n- Identify common recommendations\n- Evaluate cost vs impact\n- Consider implementation speed\n- Synthesize final action plan' },
          { type: 'header', content: '🎲 확률적 자기 일관성' },
          { type: 'code', content: 'For this critical marketing decision,\ngenerate 5 independent analyses:\n\nDecision:\nShould we double our influencer marketing budget?\n\n결정:\n인플루언서 마케팅 예산을 2배로 늘려야 할까요?\n\nAnalysis 1:\nPerformance-driven analysis\n→ ROAS, CPA 관점에서 수익성 중심 평가\n\nAnalysis 2:\nBrand equity perspective\n→ 브랜드 인지도와 장기 자산 관점 분석\n\nAnalysis 3:\nCompetitive landscape analysis\n→ 경쟁사 전략 기준 대응 필요성 평가\n\nAnalysis 4:\nContrarian analysis\n→ “굳이 늘릴 필요 없음” 관점으로 리스크 분석\n\nAnalysis 5:\nNeutral balanced assessment\n→ 리스크와 기회를 동시에 고려한 중립 평가\n\nVoting:\n- Count recommendations for / against\n- Weight by confidence level\n- Identify strong consensus\n- Highlight major disagreements\n\nFinal Recommendation:\n[Majority opinion + strongest argument based decision]' },
          { type: 'tip', content: '“한 번 생각하는 AI”가 아니라 “여러 번 다르게 생각하게 만든 뒤 가장 안정적인 답을 고르게 하는 전략 프레임워크”입니다.' }
        ]
      },
      {
        id: 'adv-4',
        title: '4. 메타 프롬프팅',
        description: 'AI에게 "프롬프트를 작성해달라"고 요청하여 더 나은 결과를 얻는 상위 기술',
        blocks: [
          { type: 'paragraph', content: '프롬프트를 직접 작성하는 대신, AI를 전문 프롬프트 엔지니어로 고용하는 것입니다.' },
          { type: 'header', content: '1) 프롬프트 자동 생성 예시' },
          { type: 'paragraph', content: '역할: “프롬프트 엔지니어링 전문가 + 마케팅 전략가”로 설정' },
          { type: 'code', content: 'You are a prompt engineering expert and senior marketing strategist.\nCreate an optimal prompt for the following task:\n당신은 프롬프트 엔지니어링 전문가이자 시니어 마케팅 전략가입니다.\n다음 작업을 위한 최적의 프롬프트를 생성하세요:\n\nTask: Generate high-converting product detail page copy\nfor an online D2C skincare brand.\n작업: D2C 스킨케어 온라인 브랜드를 위한\n전환율 높은 상세페이지 카피를 생성하는 작업\n\nConsider:\n1. What role/persona would be most effective?\n   (예: CRO 전문가, 카피라이터, 브랜드 전략가 등)\n2. What context information is needed?\n   (예: 타깃 고객, 제품 USP, 가격대, 경쟁사 포지셔닝 등)\n3. What constraints should be included?\n   (예: 문장 톤앤매너, 글자 수, 금지어, 광고 심의 관련 제약 등)\n4. What output format would be most useful?\n   (예: 섹션별 구조 – 헤드라인, 서브헤드, 바디카피, CTA 등)\n5. What examples would clarify expectations?\n   (예: 잘 팔리는 상세페이지 한두 개의 스타일 요약)\n\nGenerate a prompt that would consistently produce:\n일관되게 다음을 만족하는 프롬프트를 만드세요:\n\n- Clear, benefit-focused copy for each section\n- Emotion + logic both reflected\n- Includes social proof and urgency (where appropriate)\n- Matches the specified brand tone and target persona\n- Optimized for mobile-first reading\n\n- 각 섹션별로 ‘효과·이득’이 분명하게 드러나는 카피\n- 감성(공감)과 논리(근거)가 모두 반영된 문장\n- 필요 시 후기/사회적 증거 및 가벼운 긴급성 포함\n- 지정된 브랜드 톤과 타깃 페르소나에 일관되게 맞는 표현\n- 모바일 중심 읽기 패턴에 최적화된 구성' },
          { type: 'header', content: '🔧 프롬프트 최적화 루프' },
          { type: 'paragraph', content: '2) 반복적 프롬프트 개선 예시' },
          { type: 'code', content: 'Iterative Prompt Refinement Process:\n반복적 프롬프트 개선 프로세스 (마케팅 카피 예시):\n\nInitial Prompt:\n"Write ad copy for a skincare product."\n"스킨케어 제품 광고 문구를 작성해줘."\n\nIteration 1 - Add specificity:\n"Write Instagram ad copy for a hydrating serum\ntargeting women in their 20s and 30s."\n\n1차 개선 – 구체화:\n"20~30대 여성을 타깃으로 한 보습 세럼 인스타그램 광고 카피를 작성해줘."\n\nIteration 2 - Add constraints:\n"Write Instagram ad copy for a hydrating serum\ntargeting women in their 20s and 30s.\nUse a friendly and encouraging tone,\nmaximum 2 short sentences, and avoid hard-selling expressions."\n\n2차 개선 – 제약 조건 추가:\n"20~30대 여성을 타깃으로 한 보습 세럼 인스타그램 광고 카피를 작성해줘.\n톤은 친근하고 응원해주는 느낌으로,\n짧은 문장 2개 이내로 작성하고, 과도한 판매 문구는 피해주세요."\n\nIteration 3 - Add requirements:\n"Write Instagram ad copy for a hydrating serum\ntargeting women in their 20s and 30s.\nUse a friendly and encouraging tone,\nmaximum 2 short sentences, and avoid hard-selling expressions.\nInclude:\n- One clear benefit (e.g., lasting hydration, glow)\n- One emotional hook about daily confidence\n- A soft CTA that fits Instagram style."\n\n3차 개선 – 요구사항 추가:\n"20~30대 여성을 타깃으로 한 보습 세럼 인스타그램 광고 카피를 작성해줘.\n톤은 친근하고 응원해주는 느낌으로,\n짧은 문장 2개 이내, 과도한 판매 문구는 피해주세요.\n반드시 포함할 것:\n- 하나의 핵심 베네핏 (예: 오래가는 보습, 광채 등)\n- 일상 속 자신감에 대한 감정적 후킹 한 번\n- 인스타그램에 어울리는 부드러운 CTA 한 번."\n\nIteration 4 - Add examples:\n[Previous prompt] +\n"Example:\n\'하루 종일 무너지지 않는 촉촉함으로, 내 피부 자신감 다시 켜기💧\n지금 내 루틴에 한 방울 추가해볼래?\'"\n\n4차 개선 – 예시 추가:\n[이전 프롬프트] +\n"예시:\n\'하루 종일 무너지지 않는 촉촉함으로, 내 피부 자신감 다시 켜기💧\n지금 내 루틴에 한 방울 추가해볼래?\'"\n\nFor each iteration, evaluate:\n각 반복에서 다음을 평가합니다:\n\n- Clarity improvement: 타깃, 톤, 목적이 더 명확해졌는가?\n- Completeness: 카피에 꼭 필요한 요소들이 빠짐없이 정의됐는가?\n- Potential ambiguities remaining: 여전히 애매한 부분(길이, 스타일, 금지 표현 등)은 무엇인가?\n\n- 명확성 개선\n- 완전성\n- 남아있는 모호성' }
        ]
      },
      {
        id: 'adv-5',
        title: '5. 트리 오브 쏘트',
        description: '여러 가지 사고의 경로를 나뭇가지처럼 펼쳐서 탐색하고, 평가하여 최적의 해를 찾는 전략',
        blocks: [
          { type: 'paragraph', content: '가장 고난이도의 프롬프트 기법 중 하나로, AI가 체스 선수처럼 여러 수를 미리 내다보고 최선의 수를 두게 만드는 방법입니다.' },
          { type: 'header', content: '🌲 구조 (3단계 프로세스)' },
          { type: 'list', content: [
            '1. 분기(Branching): 문제를 해결할 수 있는 여러 가지 아이디어를 3~4개 생성합니다.',
            '2. 평가(Evaluation): 각 아이디어의 장단점과 실현 가능성을 AI가 스스로 평가하게 합니다.',
            '3. 선택 및 확장(Selection): 가장 유망한 아이디어를 선택하여 구체화합니다.'
          ]},
          { type: 'header', content: '실전 프롬프트' },
          { type: 'code', content: '주제: "기후 변화 해결을 위한 혁신적인 스타트업 아이디어"\n\n1단계: 서로 다른 접근 방식을 가진 스타트업 아이디어 3가지를 브레인스토밍하세요.\n2단계: 각 아이디어의 잠재적 영향력, 기술적 실현 가능성, 수익성을 비판적으로 평가하세요.\n3단계: 평가를 바탕으로 가장 성공 확률이 높은 아이디어 하나를 선정하고, 그 이유를 설명하세요.' },
          { type: 'header', content: '✅ 의사결정 트리 구축' },
          { type: 'code', content: 'Problem: Design a scalable marketing campaign system\n문제: 확장 가능한 마케팅 캠페인 시스템을 설계하세요\n\nLet\'s explore this as a decision tree:\n의사결정 트리로 탐색합니다:\n\nRoot: Marketing Campaign System Design\n(마케팅 캠페인 시스템 설계)\n\n├── Branch 1: Channel Strategy\n│   ├── Option 1.1: Performance Ads 중심\n│   │   ├── Pros: 빠른 성과 측정 가능\n│   │   ├── Cons: 브랜드 자산 축적 약함\n│   │   └── Evaluation: Score 8/10\n│   │\n│   ├── Option 1.2: Content Marketing 중심\n│   │   ├── Pros: 브랜드 신뢰도 장기 구축\n│   │   ├── Cons: 단기 매출 전환 느림\n│   │   └── Evaluation: Score 7/10\n│   │\n│   └── Option 1.3: Influencer 중심\n│   	├── Pros: 빠른 도달, 신뢰 전이 효과\n│   	├── Cons: 비용 변동성과 리스크\n│   	└── Evaluation: Score 6/10\n│\n├── Branch 2: Targeting Strategy\n│   ├── Option 2.1: Broad Targeting\n│   │   ├── 장점: 확장성 뛰어남\n│   │   └── 단점: 전환율 낮음\n│   │\n│   └── Option 2.2: Niche Targeting\n│   	├── 장점: 전환율 높음\n│   	└── 단점: 볼륨 제한\n│\n└── Branch 3: Budget Allocation\n	├── Option 3.1: 집중 투자형 (한 채널 몰빵)\n	│   ├── 장점: 빠른 학습\n	│   └── 단점: 리스크 큼\n	│\n	├── Option 3.2: 분산 투자형\n	│   ├── 장점: 안정성\n	│   └── 단점: 학습 속도 느림\n\nTraverse each path and evaluate combinations:\n각 경로 조합을 탐색합니다:\n\nPath 1: Performance Ads + Niche Targeting + 집중 투자\nPath 2: Content Marketing + Broad Targeting + 분산 투자\nPath 3: Performance Ads + Niche Targeting + 분산 투자\n\nBest path based on goal:\n목표 기준 최적 경로:\n[매출 목표, 브랜드 상황, 리소스 기준으로 최적 경로 선택]' },
          { type: 'header', content: '🎯 백트래킹 & 가지치기' },
          { type: 'code', content: 'Problem: Reduce marketing cost while maintaining revenue\n문제: 매출을 유지하면서 마케팅 비용을 줄이세요\n\nExploration Strategy:\n탐색 전략:\n\n1. Generate initial marketing strategies tree\n2. Evaluate ROI of each branch\n3. Prune branches with low ROAS\n4. Backtrack and re-explore alternatives\n5. Repeat until optimal strategy found\n\n현재 탐색 사항:\n\n├── Reduce ad budget by 10%\n│   ├── Impact: Leads -15%\n│   ├── Prune? No (허용 범위)\n│   └── Continue exploring...\n│   	├── Improve landing page (increase CVR +10%)\n│   	└── Improve retargeting creatives (+8% CTR)\n│\n├── Reduce influencer spend\n│   ├── Impact: Brand reach 감소 우려\n│   ├── Prune? Yes (장기 성장 저해)\n│   └── Backtrack\n│\n└── Switch low-performing channels\n	├── Impact: CPA -20%\n	├── Prune? No (긍정적 효과)\n	└── Continue exploring...\n\nFinal optimized path:\n최종 선택 경로:\n\nReduce ad budget by 10% +\nLanding page conversion optimization +\nLow-performing channel reallocation' }
        ]
      },
      {
        id: 'adv-6',
        title: '6. 메가 프롬프트',
        description: '모든 고급 기법(페르소나, CoT, ToT 등)을 하나로 통합하여 복잡한 문제를 해결하는 궁극의 프롬프트',
        blocks: [
          { type: 'header', content: '메가 프롬프트 예시' },
          { type: 'paragraph', content: '이 프롬프트는 앞서 배운 모든 기술(역할 부여, 퓨샷, 단계별 추론, 자기 일관성, 트리 오브 쏘트)을 하나의 거대한 구조로 통합한 형태입니다.' },
          { type: 'code', content: '<ROLE>\n당신은 화장품 및 뷰티 산업 전문\n마케팅 전략가이자 퍼널 설계 컨설턴트입니다.\n당신은 매출 성장과 전환 최적화에 특화되어 있습니다.\n</ROLE>\n\n<MISSION>\n당신의 목표는 사용자가 입력한 제품/브랜드 정보를 기반으로\n다음 과정을 모두 수행하는 것입니다.\n\n1. USP 도출\n2. 경쟁사 대비 분석\n3. 전환 퍼널 평가\n4. 개선 전략 설계\n</MISSION>\n\n<INPUT_SCHEMA>\n제품명:\n카테고리:\n타깃 고객:\n핵심 성분/기능:\n경쟁 제품:\n현재 문제:\n목표:\n</INPUT_SCHEMA>\n\n<PROCESS_RULES>\n반드시 아래 순서대로 진행하십시오.\n\nStep 1. USP 분석\n- 기능 중심 USP\n- 감정 중심 USP\n- 시장 공백 USP\n\nStep 2. 경쟁사 비교 분석\n- 메시지 구조 약점\n- 정보 신뢰도 평가\n- 공백 포지션 도출\n\nStep 3. 퍼널 구조 평가\n- 유입 → 클릭 → 체류 → 장바구니 → 구매 흐름 평가\n- 병목 지점 분석\n\nStep 4. 전략 트리 생성 (Tree of Thoughts 적용)\n- 솔루션 경로 최소 3개 생성\n- 리스크/난이도/임팩트 평가\n\nStep 5. 자기 일관성 검증 (Self-consistency 적용)\n- 매출 관점 전략\n- 브랜드 관점 전략\n- 운영 관점 전략\n- 공통 합의 도출\n</PROCESS_RULES>\n\n<OUTPUT_FORMAT>\n\n## Executive Summary\n\n## USP 분석 결과\n\n## 경쟁사 대비 분석\n\n## 퍼널 구조 진단\n\n## 전략 옵션 트리\n\n## 우선순위 로드맵\n\n</OUTPUT_FORMAT>\n\n<START>\n아래 정보를 분석하십시오.\n</START>' }
        ]
      },
      {
        id: 'adv-7',
        title: '7. 강제 프롬프트 예제',
        description: '분석 과정과 출력 형식을 강제하여 일관된 고품질 결과를 얻는 프롬프트 기법',
        blocks: [
          { type: 'header', content: '1. 경쟁사 분석을 “강제”하는 시스템 프롬프트 구조' },
          { type: 'code', content: '<경쟁사_분석_역할>\n당신은 화장품 및 뷰티 산업 전문 경쟁 전략 분석가입니다.\n당신의 목적은 경쟁사의 약점과 시장의 공백 포지션을 찾는 것입니다.\n</경쟁사_분석_역할>\n\n<경쟁사_분석_입력>\n경쟁사_페이지_원문:\n</경쟁사_분석_입력>\n\n<경쟁사_분석_작업_규칙>\n다음 순서를 반드시 지켜 분석하십시오.\n\n1단계: 핵심 메시지 구조 추출\n- 헤드라인\n- 서브 헤드라인\n- 주요 주장(Claim)\n- 반복 키워드\n\n2단계: 기능 정보 깊이 평가\n- 성분 정보의 구체성\n- 수치 데이터 포함 여부\n- 임상/테스트 언급 여부\n\n3단계: 감정적 설득 요소 평가\n- 공감 유발 문장 존재 여부\n- 불안/안심/기대 유발 구조\n- 라이프스타일 비유 사용 여부\n\n4단계: 신뢰 장치 분석\n- 후기 위치와 설득력\n- 인증/테스트 뱃지 유무\n- 브랜드 스토리 서술 여부\n\n5단계: 경쟁사 약점 자동 감지\n- 정보가 부족한 영역\n- 모호한 표현\n- 경쟁사 모두가 동일하게 말하고 있는 영역\n\n6단계: 화이트 스페이스 도출\n- 경쟁사가 말하지 않는 핵심 주제\n- 소비자가 궁금할 법하지만 답하지 않는 영역\n- 감정적으로 비어 있는 메시지 부분\n</경쟁사_분석_작업_규칙>' },
          { type: 'header', content: '2. 결과를 강제로 구조화하는 출력 포맷' },
          { type: 'code', content: '<경쟁사_분석_출력_형식>\n\n## 경쟁사 메시지 구조 요약\n- 핵심 헤드라인:\n- 반복 키워드:\n- 주요 주장:\n\n## 기능적 약점\n- 성분 설명의 한계:\n- 수치/근거 부족 영역:\n\n## 감정적 약점\n- 공감 유도 부재 영역:\n- 소비자 불안 해소 실패 지점:\n\n## 신뢰 설계의 허점\n- 후기 설득력 문제:\n- 인증/테스트 정보 부족:\n\n## 시장 공백 (White Space)\n- 경쟁사들이 말하지 않는 영역:\n- 소비자 니즈 대비 누락 포인트:\n- 새로운 차별 포지션 기회:\n\n## 차별화 전략 방향\n- 기능적 차별 전략:\n- 감정적 차별 전략:\n- 메시지 구조 개선 방향:\n\n</경쟁사_분석_출력_형식>' }
        ]
      }
    ]
  },
  {
    id: 'templates',
    title: '바로 사용하는 예제',
    icon: Star,
    sections: [
      {
        id: 'tmpl-1',
        title: '1. 개발 업무',
        description: '개발자를 위한 코드 리뷰, 디버깅, 기능 구현 프롬프트 모음',
        blocks: [
          { type: 'header', content: '🔍 코드 리뷰 요청하기' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 10년 경력의 시니어 개발자입니다.\n\n다음 코드를 리뷰하고 개선점을 알려주세요:\n\n[여기에 코드 붙여넣기]\n\n다음 항목을 중점적으로 봐주세요:\n\n1. 🐛 버그 가능성\n   - 논리 오류가 있나요?\n   - 예외 처리가 빠진 곳은?\n\n2. 🔒 보안 문제\n   - SQL Injection 위험은?\n   - 입력값 검증이 되나요?\n   - 비밀번호/토큰이 안전한가요?\n\n3. ⚡ 성능\n   - 느린 부분은 없나요?\n   - 메모리를 많이 쓰는 곳은?\n\n4. 📖 가독성\n   - 이해하기 어려운 부분은?\n   - 변수명이 명확한가요?\n\n5. 🧪 테스트\n   - 테스트하기 어려운 구조인가요?\n   - 놓친 예외 상황은?\n\n=== 리뷰 형식 ===\n\n## 🚨 꼭 고쳐야 할 것 (Critical)\n[심각한 버그나 보안 문제]\n\n## ⚠️ 고치면 좋을 것 (Important)\n[성능 문제나 유지보수성]\n\n## 💡 개선 제안 (Optional)\n[더 나은 코드 스타일]\n\n## ✅ 잘한 점\n[좋은 부분]\n\n## 📝 개선된 코드\n```python\n# 여기에 수정된 코드\n답변은 한국어로, 코드는 영어로 작성해주세요.' },
          { type: 'header', content: '🐛 버그 해결 도움받기' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 디버깅 전문가입니다.\n=== 문제 상황 === [어떤 문제가 발생했는지 설명]\n예: “로그인 버튼을 클릭하면 화면이 하얗게 되고 아무 반응이 없어요”\n=== 에러 메시지 === [에러 메시지 복사]\n예:\nTypeError: Cannot read property \'name\' of undefined\n  at UserProfile.render (UserProfile.js:45)\n=== 관련 코드 ===\n[문제가 발생한 코드 붙여넣기]\n=== 시도해본 것 === 1. [이미 시도한 해결 방법] 2. […]\n다음 순서로 도와주세요:\n1.    	🔍 원인 분석\no   왜 이 문제가 생겼나요?\no   어느 부분이 문제인가요?\n2.    	🛠️ 해결 방법\no   단계별로 어떻게 고치나요?\no   수정된 코드를 보여주세요\n3.    	🚫 예방법\no   같은 문제를 어떻게 방지하나요?\no   테스트는 어떻게 추가하나요?\n한국어로 설명하고, 코드 예시를 함께 보여주세요.' },
          { type: 'header', content: '💻 코드 작성 요청하기' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 [언어명] 전문 개발자입니다.\n=== 만들고 싶은 기능 === [구체적으로 설명]\n예: “사용자가 입력한 이메일이 유효한지 확인하는 함수”\n=== 요구사항 === 1. 입력: [어떤 데이터를 받나요?] 2. 처리: [어떤 작업을 하나요?] 3. 출력: [무엇을 반환하나요?] 4. 예외처리: [어떤 오류를 처리해야 하나요?]\n예시: 1. 입력: 문자열 (이메일 주소) 2. 처리: @ 기호 확인, 도메인 확인 3. 출력: True/False 4. 예외처리: 빈 문자열, None 값\n=== 추가 요청 === - [ ] 주석을 한국어로 달아주세요 - [ ] 변수명은 명확하게 지어주세요 - [ ] 테스트 코드도 함께 만들어주세요 - [ ] 사용 예시를 보여주세요\n답변 형식: 1. 코드 설명 2. 전체 코드 3. 사용 예시 4. 주의사항' }
        ]
      },
      {
        id: 'tmpl-2',
        title: '2. 비즈니스 업무',
        description: '직장인을 위한 이메일, 회의록, 보고서 작성 템플릿',
        blocks: [
          { type: 'header', content: '📧 이메일 작성' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 비즈니스 이메일 전문가입니다.\n=== 이메일 정보 === 받는 사람: [누구에게?] 목적: [왜 보내나요?] 톤: [정중함/친근함/공식적]\n예: 받는 사람: 거래처 구매 담당자 (5년 거래) 목적: 제품 가격 인상 안내 톤: 정중하고 이해를 구하는\n=== 포함할 내용 === 1. [첫 번째 내용] 2. [두 번째 내용] 3. […]\n예: 1. 가격 인상 사유 (원자재 가격 상승) 2. 새로운 가격 (10% 인상) 3. 적용 시기 (다음 달 1일부터) 4. 양해 구하기\n=== 형식 === - 제목: [간결하고 명확하게] - 인사말 - 본문 (3-4 문단) - 감사 인사 - 서명\n250자 내외로 작성해주세요.' },
          { type: 'paragraph', content: '빠른 버전:' },
          { type: 'code', content: '[받는 사람]에게 보낼 이메일을 작성해주세요.\n목적: [무엇 때문에] 톤: [정중함/친근함] 내용: [포함할 것]\n제목과 본문을 구분해서 작성해주세요.' },
          { type: 'header', content: '📊 회의록 요약' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 효율적인 회의록 작성 전문가입니다.\n=== 회의 정보 === 날짜: [언제] 참석자: [누가] 주제: [무엇에 대해]\n=== 회의 내용 === [여기에 회의 녹취록이나 메모 붙여넣기]\n=== 요약 형식 ===\n📌 핵심 요약 (3줄)\n[회의 내용을 3문장으로]\n✅ 결정사항\n·  	[결정된 것 1]\n·  	[결정된 것 2]\n·  	[…]\n💬 주요 논의사항\n이슈\n의견\n결론\n[이슈]\n[나온 의견]\n[어떻게 됐나]\n\n🎯 액션 아이템\n☐     	[담당자] - [할 일] - 마감: [날짜]\n☐     	[담당자] - [할 일] - 마감: [날짜]\n📅 다음 회의\n·  	일시: [언제]\n·  	안건: [무엇]\n간결하고 명확하게 작성해주세요.' },
          { type: 'header', content: '💼 보고서 작성' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 경영진 보고서 작성 전문가입니다.\n=== 보고서 정보 === 주제: [무엇에 대한 보고서] 대상: [누가 읽나요] 목적: [왜 작성하나요]\n=== 데이터 === [숫자, 통계, 사실 등]\n예: - Q3 매출: 5억 (전년 대비 +20%) - 신규 고객: 1,200명 (목표 달성률 120%) - 고객 만족도: 4.5/5.0\n=== 보고서 구조 ===\n📋 요약 (Executive Summary)\n[핵심만 3-4줄]\n📊 주요 성과\n·  	성과 1: [수치와 의미]\n·  	성과 2: [수치와 의미]\n·  	성과 3: [수치와 의미]\n📈 상세 분석\n[트렌드, 원인, 영향]\n⚠️ 이슈 및 리스크\n이슈\n영향도\n대응방안\n\n💡 제안사항\n1.    	즉시 실행: […]\n2.    	단기 (3개월): […]\n3.    	장기 (1년): […]\n🎯 다음 분기 목표\n[구체적 목표]\n전문적이고 간결하게, A4 2페이지 분량으로 작성해주세요.' }
        ]
      },
      {
        id: 'tmpl-3',
        title: '3. 콘텐츠 제작',
        description: '블로그, 인스타그램 등 콘텐츠 크리에이터를 위한 글쓰기 템플릿',
        blocks: [
          { type: 'header', content: '✍️ 블로그 글 작성' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 인기 블로거입니다.\n=== 글 정보 === 주제: [무엇에 대해] 독자: [누가 읽나요] 목적: [왜 쓰나요]\n예: 주제: 재택근무 생산성 높이는 법 독자: 재택근무 초보 직장인 목적: 실천 가능한 팁 제공\n=== 글 스타일 === - 톤: [친근함/전문적/유머러스] - 길이: [1000자/2000자] - 형식: [리스트/스토리/가이드]\n=== 구조 ===\n[눈길 끄는 제목]\n시작 (후킹)\n[공감가는 문제 제시] [통계나 사실로 관심 유도]\n본문\n방법 1: [제목]\n[설명] [예시] [팁]\n방법 2: [제목]\n[…]\n[3-5가지 방법]\n실천 체크리스트\n☐     	[실행할 것 1]\n☐     	[실행할 것 2]\n☐     	[…]\n마무리\n[격려 메시지] [핵심 요약]\n읽기 쉽게 짧은 문장으로, 이모지를 적절히 사용해서 작성해주세요.' },
          { type: 'paragraph', content: '빠른 버전:' },
          { type: 'code', content: '[주제]에 대한 블로그 글을 작성해주세요.\n독자: [대상] 분량: 1500자 톤: 친근하고 실용적\n다음 형식으로: 1. 공감가는 도입부 2. 핵심 방법 3-5가지 3. 실천 팁 4. 격려하는 마무리\n읽기 쉽게 작성해주세요.' },
          { type: 'header', content: '📱 SNS 포스트 만들기' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 SNS 마케팅 전문가입니다.\n=== 포스트 정보 === 플랫폼: [인스타그램/페이스북/트위터] 내용: [무엇을 홍보/공유] 목적: [좋아요/공유/방문 유도]\n=== 요청사항 ===\n포스트 5개를 만들어주세요. 각 포스트마다:\n1.    	메인 문구 (50자 이내)\n2.    	본문 (200자 이내)\n3.    	해시태그 5-10개\n4.    	이모지 활용\n스타일: - [ ] 친근하고 대화하는 톤 - [ ] 액션 유도 (CTA) 포함 - [ ] 공감 유발\n예시 형식:\n포스트 1 📌 메인: […] 💬 본문: […] #️⃣ 해시태그: #… #… #… —' }
        ]
      },
      {
        id: 'tmpl-4',
        title: '4. 데이터 분석',
        description: '데이터를 인사이트로 변환하는 분석 프롬프트',
        blocks: [
          { type: 'header', content: '📊 데이터 인사이트 추출' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 데이터 분석 전문가입니다.\n=== 데이터 정보 === [데이터 설명 또는 데이터 붙여넣기]\n예: - 기간: 2025년 1-6월 - 총 매출: 3억원 - 방문자: 50,000명 - 구매 전환율: 2.5% - 평균 구매액: 50,000원\n=== 분석 요청 ===\n다음 형식으로 분석해주세요:\n📌 핵심 발견사항 (Top 3)\n1.    	[가장 중요한 인사이트]\n2.    	[두 번째]\n3.    	[세 번째]\n📈 긍정적 트렌드\n·  	[잘되고 있는 것]\n·  	[성장하고 있는 부분]\n⚠️ 주의할 점\n·  	[문제가 될 수 있는 부분]\n·  	[개선이 필요한 영역]\n💡 실행 가능한 제안\n1.    	즉시 실행: […]\no   예상 효과: […]\no   소요 리소스: […]\n2.    	단기 (1개월): […]\no   예상 효과: […]\n3.    	장기 (3개월): […]\no   예상 효과: […]\n📊 예상 효과\n[제안 실행 시 기대 결과]\n숫자로 말하고, 액션 중심으로 작성해주세요.' },
          { type: 'paragraph', content: '간단한 버전:' },
          { type: 'code', content: '다음 데이터를 분석해주세요:\n[데이터]\n핵심 3가지와 개선 방법을 알려주세요.' }
        ]
      },
      {
        id: 'tmpl-5',
        title: '5. 학습 & 교육',
        description: '복잡한 개념을 쉽게 배우고 가르치는 프롬프트',
        blocks: [
          { type: 'header', content: '📚 어려운 개념 쉽게 설명받기' },
          { type: 'paragraph', content: '복사해서 사용하세요:' },
          { type: 'code', content: '당신은 쉽게 설명하는 선생님입니다.\n=== 학습할 개념 === [배우고 싶은 것]\n예: “블록체인이 뭔가요?”\n=== 학습자 정보 === - 나이/레벨: [예: 중학생 수준] - 배경지식: [예: 컴퓨터 기초만 앎] - 목적: [예: 기본 개념 이해]\n=== 설명 방식 ===\n🎯 한 문장 정의\n[가장 쉽게 한 문장으로]\n🏠 일상 비유\n[실생활 예시로 설명]\n예: “블록체인은 여러 사람이 함께 쓰는 공책 같아요…”\n📝 핵심 3가지\n1.    	[특징 1] → 왜 중요한가?\n2.    	[특징 2] → 어떻게 활용?\n3.    	[특징 3] → 무엇이 좋은가?' }
        ]
      }
    ]
  }
];
