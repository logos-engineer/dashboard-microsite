import tw from 'twin.macro'

export default function Home() {
  return (
    <div
      css={[
        tw`container mx-auto min-h-screen flex justify-center items-center`,
      ]}
    >
      <div css={[tw`flex items-center gap-3`]}>
        <h1 css={[tw`font-medium text-blue-600 text-2xl`]}>Initialize</h1>
        <h1 css={[tw`font-medium bg-blue-600 text-white text-2xl`]}>
          Twin.Macro
        </h1>
      </div>
    </div>
  )
}
