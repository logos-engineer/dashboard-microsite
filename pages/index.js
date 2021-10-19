import tw from 'twin.macro'

export default function Home() {
  return (
    <div
      css={[
        tw`container mx-auto min-h-screen flex justify-center items-center`,
      ]}
    >
      <h1 css={[tw`text-2xl text-blue-500`]}>Initialize TWIN</h1>
    </div>
  )
}
