class App {
    getSelector(android: string, ios: string): string {
        return process.env.PLATFORM === 'android' ? android : ios;
    }
}

export default App;
