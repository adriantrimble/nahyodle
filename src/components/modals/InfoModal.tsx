import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
			Guess the word in 6 tries. After each guess, the colour of the tiles will change to show how close your guess was to the word. There are jaunt sied and dit sied Plautdietsch words and Menno-adjacent English words. No special characters (except Jake the Schmäkje, he’s a special character).
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="E" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
			The letter S is in the word and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell value="B" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="Y" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
			The letter A is in the word but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="U" />
        <Cell value="I" />
        <Cell isRevealing={true} isCompleted={true} value="L" status="absent" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
			The letter L is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
			We are not linguists. If you spell it different, blame jaunt sied. Nah Yo-dle was written by{' '}
        <a
          href="http://thevarscht.com"
          className="underline font-bold"
        >
          Jared Falk
        </a>{' '} and implemented by{' '}
        <a
          href="http://adriantrimble.com"
          className="underline font-bold"
        >
          Adrian Trimble
        </a>{' '} using the {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          React Wordle
        </a> project.
      </p>
    </BaseModal>
  )
}
